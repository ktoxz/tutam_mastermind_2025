import { StatusCodes } from 'http-status-codes'
import { predictService } from '../services/predictService.js'

const predictMood = async (req, res, next) => {
  try {
    const { features } = req.body
    const moodResponse = await predictService.predictMood(features)

    res.status(StatusCodes.OK).json(moodResponse)
  } catch (error) {
    next(error)
  }
}

export const predictController = {
  predictMood
}
