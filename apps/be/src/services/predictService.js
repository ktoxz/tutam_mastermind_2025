const anxiety = [1, 4, 6, 7, 8, 9]
const depression = [2, 3, 5, 10]

const predictMood = async (features) => {
  const anxietyScore = anxiety.reduce((sum, i) => sum + (features[`Q${i}`] || 0), 0) / anxiety.length

  const depressionScore = depression.reduce((sum, i) => sum + (features[`Q${i}`] || 0), 0) / depression.length

  if (anxietyScore >= 2) {
    return 'mood-3'
  }

  if (depressionScore >= 2) {
    return 'mood-2'
  }

  const mean = (anxietyScore + depressionScore) / 2

  if (mean >= 1.5) {
    if (anxietyScore > depressionScore) {
      return 'mood-3'
    }
    return 'mood-2'
  }

  if (mean >= 1) {
    return 'mood-4'
  }

  return 'mood-1'
}

export const predictService = {
  predictMood
}
