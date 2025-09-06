import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connectDB } from './config/mongodb.js'
import { APIs_V1 } from './routes/v1/index.js'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware.js'
import { corsOptions } from './config/cors.js'
import { ENV } from './config/environment.js'

const app = express()
const HOST = ENV.HOST
const PORT = ENV.PORT

app.use(cors(corsOptions))

app.use(cookieParser())
app.use(express.json())

app.use('/api/v1', APIs_V1)

app.use(errorHandlingMiddleware)

connectDB()

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}`)
})
