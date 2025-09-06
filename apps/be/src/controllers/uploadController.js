import { StatusCodes } from 'http-status-codes'
import { uploadService } from '../services/uploadService.js'

const uploadImage = async (req, res, next) => {
  try {
    const result = await uploadService.uploadImage(req.file?.buffer)

    res.status(StatusCodes.OK).json({
      message: 'Tải ảnh lên thành công.',
      ...result
    })
  } catch (error) {
    next(error)
  }
}

export const uploadController = {
  uploadImage
}
