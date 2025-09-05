from typing import Dict

anxiety = [1, 4, 6, 7, 8, 9]
depression = [2, 3, 5, 10]

def predict_emotion(features: Dict[str, float]):
    anxiety_score = sum(features.get(f'Q{i}', 0) for i in anxiety) / len(anxiety)
    depression_score = sum(features.get(f'Q{i}', 0) for i in depression) / len(depression)

    if anxiety_score >= 2:
        return "mood-3"
    
    if depression_score >= 2:
        return "mood-2"

    mean = (anxiety_score + depression_score) / 2

    if mean >= 1.5:
        if anxiety_score > depression_score:
            return "mood-3"
        return "mood-2"
    
    if mean >= 1:
        return "mood-4"

    return "mood-1"