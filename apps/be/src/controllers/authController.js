import { StatusCodes } from 'http-status-codes'
import { authService } from '../services/authService.js'
import { ENV } from '../config/environment.js'

const register = async (req, res, next) => {
  try {
    await authService.register(req.body)

    res.status(StatusCodes.CREATED).json({
      message: 'Đăng ký người dùng thành công. Vui lòng kiểm tra email để lấy mã OTP xác thực tài khoản.'
    })
  } catch (error) {
    next(error)
  }
}

const verifyOtp = async (req, res, next) => {
  try {
    await authService.verifyOtp(req.body)

    res.status(StatusCodes.OK).json({
      message: 'Xác thực OTP thành công.'
    })
  } catch (error) {
    next(error)
  }
}

const resendOtp = async (req, res, next) => {
  try {
    await authService.resendOtp(req.body)

    res.status(StatusCodes.OK).json({
      message: 'OTP đã được gửi lại. Vui lòng kiểm tra email của bạn.'
    })
  } catch (error) {
    next(error)
  }
}

const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body)

    if (result.requiresVerification) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        ...result,
        message: 'Người dùng chưa được xác thực. Vui lòng xác thực tài khoản của bạn bằng cách sử dụng mã OTP đã gửi đến email của bạn.'
      })
    }

    const { accessToken, refreshToken } = result

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: ENV.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 15 * 24 * 60 * 60 * 1000 // 15 days
    })

    res.status(StatusCodes.OK).json({
      message: 'Đăng nhập thành công.',
      accessToken
    })
  } catch (error) {
    next(error)
  }
}

const logout = async (req, res, next) => {
  try {
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: ENV.NODE_ENV === 'production',
      sameSite: 'Strict'
    })

    res.status(StatusCodes.OK).json({
      message: 'Đăng xuất thành công.'
    })
  } catch (error) {
    next(error)
  }
}

const refreshAccessToken = async (req, res, next) => {
  try {
    const { accessToken } = await authService.refreshAccessToken(req.cookies?.refreshToken)

    res.status(StatusCodes.OK).json({
      message: 'Làm mới token thành công.',
      accessToken
    })
  } catch (error) {
    next(error)
  }
}

const forgotPassword = async (req, res, next) => {
  try {
    await authService.forgotPassword(req.body.email)

    res.status(StatusCodes.OK).json({
      message: 'Nếu email đã được đăng ký, liên kết đặt lại mật khẩu đã được gửi đến email của bạn.'
    })
  } catch (error) {
    next(error)
  }
}

const resetPassword = async (req, res, next) => {
  try {
    await authService.resetPassword(req.params.token, req.body)

    res.status(StatusCodes.OK).json({
      message: 'Đặt lại mật khẩu thành công.'
    })
  } catch (error) {
    next(error)
  }
}

export const authController = {
  register,
  verifyOtp,
  resendOtp,
  login,
  logout,
  refreshAccessToken,
  forgotPassword,
  resetPassword
}
