import { genaiService } from './genaiService.js'

const anxiety = [1, 4, 6, 7, 8, 9]
const depression = [2, 3, 5, 10]

const predictMood = async (features) => {
  const anxietyScore = anxiety.reduce((sum, i) => sum + (features[`Q${i}`] || 0), 0) / anxiety.length
  const depressionScore = depression.reduce((sum, i) => sum + (features[`Q${i}`] || 0), 0) / depression.length

  let result = 'mood-1'

  if (anxietyScore >= 2) {
    result = 'mood-3'
  } else if (depressionScore >= 2) {
    result = 'mood-2'
  } else {
    const mean = (anxietyScore + depressionScore) / 2

    if (mean >= 1.5) {
      result = anxietyScore > depressionScore ? 'mood-3' : 'mood-2'
    } else if (mean >= 1) {
      result = 'mood-4'
    } else {
      result = 'mood-1'
    }
  }

  const moodResponse = await genaiService.getMoodResponse(result)
  return moodResponse
}

export const predictService = {
  predictMood
}
