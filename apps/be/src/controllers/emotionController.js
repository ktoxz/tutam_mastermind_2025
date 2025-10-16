import { StatusCodes } from 'http-status-codes'
import { emotionService } from '../services/emotionService.js'

const predictMood = async (req, res, next) => {
  try {
    const userId = req.user ? req.user.userId : null
    const { tags, diary } = req.body

    const moodResponse = userId
      ? await emotionService.predictMood(userId, tags, diary)
      : await emotionService.predictMoodNonUser(tags, diary)

    res.status(StatusCodes.OK).json(moodResponse)
  } catch (error) {
    next(error)
  }
}

const getEmotionHistory = async (req, res, next) => {
  try {
    const { userId } = req.user
    const history = await emotionService.getEmotionHistory(userId)

    res.status(StatusCodes.OK).json(history)
  } catch (error) {
    next(error)
  }
}

const deleteEmotion = async (req, res, next) => {
  try {
    const { userId } = req.user
    const { emotionId } = req.params
    await emotionService.deleteEmotion(userId, emotionId)

    res.status(StatusCodes.OK).json({ message: 'Xóa cảm xúc thành công' })
  } catch (error) {
    next(error)
  }
}

export const emotionController = {
  predictMood,
  getEmotionHistory,
  deleteEmotion
}
