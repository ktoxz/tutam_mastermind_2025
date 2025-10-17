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

const getEmotionById = async (req, res, next) => {
  try {
    const { userId } = req.user
    const { id } = req.params
    const emotion = await emotionService.getEmotionById(userId, id)

    if (!emotion) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Không tìm thấy cảm xúc' })
    }

    res.status(StatusCodes.OK).json(emotion)
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
    const { id } = req.params
    await emotionService.deleteEmotion(userId, id)

    res.status(StatusCodes.OK).json({ message: 'Xóa cảm xúc thành công' })
  } catch (error) {
    next(error)
  }
}

export const emotionController = {
  predictMood,
  getEmotionHistory,
  getEmotionById,
  deleteEmotion
}
