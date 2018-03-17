import express from 'express'
import fs from 'fs'
import log from '~/src/log'

const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 3000
const socket = process.env.SOCKET || '/var/run/app/node.sock'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

if (env === 'development') {
  app.listen(port, (e) => {
    if (e) throw log(e.message)
    log(`Example app listening on port ${port}`)
  })
} else {
  try {
    fs.unlinkSync(socket)
  } catch (e) {
    log(e.message)
  }
  app.listen(socket, (e) => {
    if (e) throw log(e.message)
    fs.chmodSync(socket, '660')
    log(`Example app listening on socket ${socket}`)
  })
}
