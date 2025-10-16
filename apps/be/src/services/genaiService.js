import { StatusCodes } from 'http-status-codes'
import ApiError from '../utils/ApiError.js'
import genai from '../config/genai.js'

const MOOD_LIST = ['cảnh giác', 'ngất ngây', 'ngưỡng mộ', 'khiếp đảm', 'kinh ngạc', 'đau khổ', 'ghê tởm', 'thịnh nộ']

const SYS =
  'Bạn là một trợ lý cảm xúc, giúp cải thiện cảm xúc tinh thần: thân thiện, gần gũi, ấm áp, tình cảm, thấu hiểu; không chẩn đoán y khoa. ' +
  'Chỉ trả về JSON hợp lệ, không tự thêm nội dung. '

const TEMPLATE_DESC = `
  Trả về JSON với các khóa sau (tôn trọng giới hạn độ dài):
  - mood: một trong các giá trị sau: ${MOOD_LIST.join(', ')}
  - header: tiêu đề hoặc cảnh báo về cảm xúc (<= 40 ký tự)
  - validation: 2-3 câu thấu cảm sâu sắc (<= 300 ký tự)
  - encouragement: 2–3 câu khích lệ chi tiết và động viên (<= 400 ký tự)
  - actions: mảng 3 mục hành động cụ thể, chi tiết phù hợp để cải thiện cảm xúc hiện tại (mỗi mục <= 100 ký tự)
  - quote: 1 trích dẫn hoặc câu nói ý nghĩa giúp cải thiện cảm xúc hiện tại (<= 200 ký tự)
    `

const getMoodResponse = async (emotions, diary) => {
  if (!emotions) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Thiếu trường bắt buộc.')
  }

  const emotionsString = emotions.join(', ')
  const prompt = `Cảm xúc hiện tại là ${emotionsString}. Nhật ký cảm xúc là ${diary}. ${TEMPLATE_DESC}. Luôn trả về nội dung mới hay và ý nghĩa.`

  const res = await genai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      systemInstruction: SYS,
      temperature: 0.6,
      maxOutputTokens: 1000,
      responseMimeType: 'application/json',
      responseJsonSchema: {
        type: 'object',
        properties: {
          mood: { type: 'string', enum: MOOD_LIST },
          header: { type: 'string' },
          validation: { type: 'string' },
          encouragement: { type: 'string' },
          actions: { type: 'array', items: { type: 'string' }, minItems: 3, maxItems: 3 },
          quote: { type: 'string' }
        },
        required: ['mood', 'header', 'validation', 'encouragement', 'actions', 'quote']
      },
      thinkingConfig: {
        thinkingBudget: 0
      }
    }
  })

  const data = JSON.parse(res.text)
  return data
}

export const genaiService = {
  getMoodResponse
}
