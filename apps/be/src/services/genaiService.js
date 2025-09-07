import { StatusCodes } from 'http-status-codes'
import ApiError from '../utils/ApiError.js'
import genai from '../config/genai.js'

const MOOD = {
  'mood-1': 'hạnh phúc',
  'mood-2': 'buồn bã',
  'mood-3': 'lo lắng',
  'mood-4': 'bình yên'
}

const SYS =
  'Bạn là một trợ lý cảm xúc, giúp cải thiện cảm xúc tinh thần: thân thiện, ấm áp, tình cảm, thấu hiểu; không chẩn đoán y khoa. ' +
  'Chỉ trả về JSON hợp lệ, không tự thêm nội dung. '

const TEMPLATE_DESC = `
  Trả về JSON với các khóa sau (tôn trọng giới hạn độ dài):
  - moodId: số
  - moodLabel: chuỗi
  - header: tiêu đề nhận định cảm xúc (<= 20 ký tự)
  - validation: 1 câu thấu cảm (<= 150 ký tự)
  - encouragement: 1–2 câu khích lệ (<= 250 ký tự)
  - actions: mảng 3 mục hành động ngắn, thực tế phù hợp để cải thiện cảm xúc hiện tại (mỗi mục <= 60 ký tự)
  - quote: 1 trích dẫn hoặc 1 câu nói phù hợp giúp cải thiện cảm xúc hiện tại (<= 120 ký tự)
    `

const getMoodResponse = async (moodId) => {
  if (!moodId) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Thiếu trường bắt buộc.')
  }

  const mood = MOOD[moodId]
  const prompt = `Cảm xúc hiện tại là ${mood}. ${TEMPLATE_DESC}`

  const res = await genai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      systemInstruction: SYS,
      temperature: 0.6,
      maxOutputTokens: 320,
      responseMimeType: 'application/json',
      thinkingConfig: {
        thinkingBudget: 0
      }
    }
  })

  const data = JSON.parse(res.text)
  data.moodId = moodId
  data.moodLabel = mood
  return data
}

export const genaiService = {
  getMoodResponse
}
