import express from 'express'
import { predictController } from '../../controllers/predictController.js'

const Router = express.Router()

Router.post('/', predictController.predictMood)

export const predictRoute = Router
