import jwt from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes'
import ApiError from '../utils/ApiError.js'
import { ENV } from '../config/environment.js'

export const verifyUserMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new ApiError(StatusCodes.FORBIDDEN, 'Access token không hợp lệ hoặc đã hết hạn'))
  }

  const token = authHeader.split(' ')[1]

  jwt.verify(token, ENV.JWT_ACCESS_SECRET, (err, decoded) => {
    if (err) {
      return next(new ApiError(StatusCodes.FORBIDDEN, 'Access token không hợp lệ hoặc đã hết hạn'))
    }

    req.user = decoded
    next()
  })
}
