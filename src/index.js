import express from 'express'
import log from '~/src/log'

const port = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  log('Example app listening on port 3000!')
})
