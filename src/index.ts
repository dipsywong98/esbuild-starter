import express from 'express'
import config from './config'
const app = express()

app.get('/', (req, res) => {
  res.send(config.HELLO_WORLD)
})


// const x: string = 12

const PORT = 3001

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`)
})
