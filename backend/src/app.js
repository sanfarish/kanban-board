import express from 'express'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import logger from 'morgan'
const app = express()

app.use(logger('dev'))
app.use(helmet())
app.use(cors({ origin: process.env.CORS_ORIGIN }))
app.use(compression())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
