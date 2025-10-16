import express from 'express'
import { verifyUserMiddleware } from '../../middlewares/verifyUserMiddleware.js'
import { emotionController } from '../../controllers/emotionController.js'

const Router = express.Router()

Router.post('/', verifyUserMiddleware, emotionController.predictMood)
Router.get('/history', verifyUserMiddleware, emotionController.getEmotionHistory)
Router.delete('/:emotionId', verifyUserMiddleware, emotionController.deleteEmotion)

export const emotionRoute = Router
