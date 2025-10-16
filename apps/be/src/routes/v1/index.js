import express from 'express'
import { StatusCodes } from 'http-status-codes'

import { authRoute } from './authRoute.js'
import { userRoute } from './userRoute.js'
import { uploadRoute } from './uploadRoute.js'
import { emotionRoute } from './emotionRoute.js'

const Router = express.Router()

Router.get('/', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'Chào mừng đến với API Tự Tâm' })
})

Router.use('/auth', authRoute)
Router.use('/user', userRoute)
Router.use('/upload', uploadRoute)
Router.use('/emotion', emotionRoute)

export const APIs_V1 = Router
