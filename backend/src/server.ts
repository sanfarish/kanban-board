#!/usr/bin/env node
import app from './app.js'
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`kanban-board-backend listening on port ${port}`)
})
