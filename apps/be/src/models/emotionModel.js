import mongoose from 'mongoose'

const emotionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tags: { type: [String], required: true },
    diary: { type: String, default: '' },
    mood: { type: String, required: true },
    header: { type: String, required: true },
    validation: { type: String, required: true },
    encouragement: { type: String, required: true },
    actions: { type: [String], required: true },
    quote: { type: String, required: true }
  },
  { timestamps: true }
)

const Emotion = mongoose.model('Emotion', emotionSchema)
export default Emotion
