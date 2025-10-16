import { genaiService } from './genaiService.js'
import User from '../models/userModel.js'
import Emotion from '../models/emotionModel.js'
import ApiError from '../utils/ApiError.js'
import { StatusCodes } from 'http-status-codes'
import mongoose from 'mongoose'

const predictMood = async (userId, tags, diary) => {
  const user = await User.findById(userId)
  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Không tìm thấy người dùng')
  }

  const moodResponse = await genaiService.getMoodResponse(tags, diary)

  const emotion = new Emotion({
    userId,
    tags,
    diary,
    ...moodResponse
  })
  await emotion.save()

  return moodResponse
}

const predictMoodNonUser = async (tags, diary) => {
  const moodResponse = await genaiService.getMoodResponse(tags, diary)
  return moodResponse
}

const getEmotionHistory = async (userId) => {
  const history = await Emotion.aggregate([
    { $match: { userId: new mongoose.Types.ObjectId(userId) } },
    {
      $sort: { createdAt: -1 }
    },
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        list: { $push: '$$ROOT' }
      }
    }
  ])
  return history
}

const deleteEmotion = async (userId, emotionId) => {
  const emotion = await Emotion.findOneAndDelete({ _id: emotionId, userId })
  if (!emotion) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Không tìm thấy cảm xúc')
  }
}

export const emotionService = {
  predictMood,
  predictMoodNonUser,
  getEmotionHistory,
  deleteEmotion
}
