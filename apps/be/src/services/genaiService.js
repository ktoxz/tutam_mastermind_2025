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
  'Bạn là một trợ lý cảm xúc, giúp cải thiện cảm xúc tinh thần: thân thiện, gần gũi, ấm áp, tình cảm, thấu hiểu; không chẩn đoán y khoa. ' +
  'Chỉ trả về JSON hợp lệ, không tự thêm nội dung. '

const TEMPLATE_DESC = `
  Trả về JSON với các khóa sau (tôn trọng giới hạn độ dài):
  - header: tiêu đề nhận định cảm xúc (<= 40 ký tự)
  - validation: 2-3 câu thấu cảm sâu sắc (<= 300 ký tự)
  - encouragement: 2–3 câu khích lệ chi tiết và động viên (<= 400 ký tự)
  - actions: mảng 3 mục hành động cụ thể, chi tiết phù hợp để cải thiện cảm xúc hiện tại (mỗi mục <= 100 ký tự)
  - quote: 1 trích dẫn hoặc câu nói ý nghĩa giúp cải thiện cảm xúc hiện tại (<= 200 ký tự)
    `

const getMoodResponse = async (moodId) => {
  if (!moodId) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Thiếu trường bắt buộc.')
  }

  const mood = MOOD[moodId]
  const prompt = `Cảm xúc hiện tại là ${mood}. ${TEMPLATE_DESC}. Luôn trả về nội dung mới hay và ý nghĩa.`

  const res = await genai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      systemInstruction: SYS,
      temperature: 0.6,
      maxOutputTokens: 800,
      responseMimeType: 'application/json',
      responseJsonSchema: {
        type: 'object',
        properties: {
          header: { type: 'string' },
          validation: { type: 'string' },
          encouragement: { type: 'string' },
          actions: { type: 'array', items: { type: 'string' }, minItems: 3, maxItems: 3 },
          quote: { type: 'string' }
        },
        required: ['header', 'validation', 'encouragement', 'actions', 'quote']
      },
      thinkingConfig: {
        thinkingBudget: 0
      }
    }
  })

  const data = JSON.parse(res.text)
  data._id = moodId
  data.mood_label = mood
  return data
}

export const genaiService = {
  getMoodResponse
}
