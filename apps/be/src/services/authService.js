import { StatusCodes } from 'http-status-codes'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import ApiError from '../utils/ApiError.js'
import {
  compareOtp,
  comparePassword,
  generateAndHashOTP,
  getExpireTime,
  hashPassword,
  generateAccessToken,
  generateRefreshToken,
  generateResetToken,
  getResetPasswordLink
} from '../utils/helpers.js'
import { ENV } from '../config/environment.js'
import { emailService } from './emailService.js'

const register = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ email })

  if (existingUser) {
    throw new ApiError(StatusCodes.CONFLICT, 'Email đã được đăng ký. Vui lòng sử dụng email khác.')
  }

  const hashedPassword = await hashPassword(password)
  const { otp, hashedOtp } = generateAndHashOTP()
  const otpExpires = getExpireTime(5)

  const user = new User({
    name,
    email,
    password: hashedPassword,
    otp: hashedOtp,
    otpExpires
  })

  await user.save()
  await emailService.sendVerificationEmail(email, name, otp)
}

const verifyOtp = async ({ email, otp }) => {
  const user = await User.findOne({ email })

  if (!user) throw new ApiError(StatusCodes.NOT_FOUND, 'Không tìm thấy người dùng')

  if (user.isVerified) throw new ApiError(StatusCodes.BAD_REQUEST, 'Người dùng đã được xác thực')

  if (!user.otp || !user.otpExpires || user.otpExpires < new Date()) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, 'OTP không hợp lệ hoặc đã hết hạn')
  }

  const isOtpValid = compareOtp(otp, user.otp)
  if (!isOtpValid) throw new ApiError(StatusCodes.UNAUTHORIZED, 'OTP không hợp lệ')

  user.isVerified = true
  user.otp = undefined
  user.otpExpires = undefined

  await user.save()
}

const resendOtp = async ({ email }) => {
  const user = await User.findOne({ email })

  if (!user) throw new ApiError(StatusCodes.NOT_FOUND, 'Không tìm thấy người dùng')

  if (user.isVerified) throw new ApiError(StatusCodes.BAD_REQUEST, 'Người dùng đã được xác thực')

  const { otp, hashedOtp } = generateAndHashOTP()
  const otpExpires = getExpireTime(5)

  user.otp = hashedOtp
  user.otpExpires = otpExpires

  await user.save()
  await emailService.sendVerificationEmail(email, user.name, otp)
}

const login = async ({ email, password }) => {
  const user = await User.findOne({ email })
  if (!user) throw new ApiError(StatusCodes.UNAUTHORIZED, 'Email hoặc mật khẩu không đúng')

  const isPasswordValid = await comparePassword(password, user.password)
  if (!isPasswordValid) throw new ApiError(StatusCodes.UNAUTHORIZED, 'Email hoặc mật khẩu không đúng')

  if (!user.isVerified) {
    if (!user.otp || !user.otpExpires || user.otpExpires < new Date()) {
      const { otp, hashedOtp } = generateAndHashOTP()
      const otpExpires = getExpireTime(5)

      user.otp = hashedOtp
      user.otpExpires = otpExpires

      await user.save()
      await emailService.sendVerificationEmail(email, user.name, otp)
    }

    return {
      requiresVerification: true
    }
  }

  const accessToken = generateAccessToken({ userId: user._id })
  const refreshToken = generateRefreshToken({ userId: user._id })

  return { accessToken, refreshToken }
}

export const refreshAccessToken = async (refreshToken) => {
  if (!refreshToken) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, 'Refresh token là bắt buộc')
  }

  const { userId } = jwt.verify(refreshToken, ENV.JWT_REFRESH_SECRET, (err, decoded) => {
    if (err) {
      throw new ApiError(StatusCodes.UNAUTHORIZED, 'Refresh token không hợp lệ')
    }
    return decoded
  })

  const user = await User.findById(userId)
  if (!user) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, 'Không tìm thấy người dùng')
  }

  const newAccessToken = generateAccessToken({ userId: user._id })
  return { accessToken: newAccessToken }
}

const forgotPassword = async (email) => {
  const user = await User.findOne({ email })

  if (!user) return

  const { rawToken, hashedToken } = generateResetToken()
  const resetPasswordExpires = getExpireTime(10)

  const resetLink = getResetPasswordLink(rawToken)

  user.resetPasswordToken = hashedToken
  user.resetPasswordExpires = resetPasswordExpires

  await user.save()
  await emailService.sendResetPasswordEmail(email, user.name, resetLink)
}

const resetPassword = async (rawToken, { newPassword }) => {
  const { hashedToken } = generateResetToken(rawToken)
  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpires: { $gt: new Date() }
  })

  if (!user) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, 'Token đặt lại mật khẩu không hợp lệ hoặc đã hết hạn')
  }

  user.password = await hashPassword(newPassword)
  user.resetPasswordToken = undefined
  user.resetPasswordExpires = undefined

  await user.save()
}

export const authService = {
  register,
  verifyOtp,
  resendOtp,
  login,
  refreshAccessToken,
  forgotPassword,
  resetPassword
}
