import jwt from 'jsonwebtoken'
import { ENV } from '../config/environment.js'

export const extractUserIfExistsMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1]

    jwt.verify(token, ENV.JWT_ACCESS_SECRET, (err, decoded) => {
      if (!err) {
        req.user = decoded
      }

      next()
    })
  } else {
    next()
  }
}
