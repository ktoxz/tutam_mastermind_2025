import { GoogleGenAI } from '@google/genai'
import { ENV } from './environment.js'

const genai = new GoogleGenAI({
  apiKey: ENV.GENAI_API_KEY
})

export default genai
