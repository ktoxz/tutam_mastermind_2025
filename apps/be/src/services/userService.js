import { StatusCodes } from 'http-status-codes'
import User from '../models/userModel.js'
import ApiError from '../utils/ApiError.js'
import { comparePassword, hashPassword } from '../utils/helpers.js'
import { uploadService } from '../services/uploadService.js'

const getMe = async (userId) => {
  const user = await User.findById(userId).select('-password')

  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Không tìm thấy người dùng')
  }

  return user
}

const changeName = async (userId, name) => {
  const user = await User.findById(userId)

  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Không tìm thấy người dùng')
  }

  user.name = name
  await user.save()
}

const changePassword = async (userId, { currentPassword, newPassword }) => {
  const user = await User.findById(userId)

  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Không tìm thấy người dùng')
  }

  const isCurrentPasswordValid = await comparePassword(currentPassword, user.password)
  if (!isCurrentPasswordValid) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, 'Mật khẩu hiện tại không đúng')
  }

  const isPasswordEqual = await comparePassword(newPassword, user.password)
  if (isPasswordEqual) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Mật khẩu mới không thể giống với mật khẩu hiện tại')
  }

  user.password = await hashPassword(newPassword)
  await user.save()
}

const changeAvatar = async (userId, avatarFile) => {
  const { url } = await uploadService.uploadImage(avatarFile?.buffer)

  const user = await User.findById(userId)

  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Không tìm thấy người dùng')
  }

  user.avatarUrl = url
  await user.save()
}

const deleteAccount = async (userId) => {
  const user = await User.findById(userId)

  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Không tìm thấy người dùng')
  }

  await User.deleteOne({ _id: userId })
}

export const userService = {
  getMe,
  changeName,
  changePassword,
  deleteAccount,
  changeAvatar
}
