require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000

app.get('/backend1', (req, res) => {
  res.send('Hello Backend 1')
})

app.get('/backend2', (req, res) => {
    res.send('Hello Backend 2')
})

app.get('/backend3', (req, res) => {
    res.send("<h1> Hello Backend 3 <h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})