from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict
from pydantic import BaseModel
from app.model import predict_emotion

app = FastAPI(title="Emotion API", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # chấp nhận mọi origin (chỉ dùng khi dev)
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "Emotion API is running"}

class PredictIn(BaseModel):
    features: Dict[str, float]

class PredictOut(BaseModel):
    moodId: str

@app.post("/predict", response_model=PredictOut)
def predict(req: PredictIn):
    try:
        features = req.features
        moodId = predict_emotion(features)
        return PredictOut(moodId=moodId)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
