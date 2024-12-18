#!/usr/bin/env node
import dotenv from 'dotenv'
import app from './app.js'
dotenv.config()

const port = process.env.PORT

app.listen(port, () => {
  console.log(`kanban-board-backend listening on port ${port}`)
})
