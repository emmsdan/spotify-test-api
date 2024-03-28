const express = require('express')
const app = express()
const port = 3001

app.get('/signup', (req, res) => {
  res.send('Hello Grace and Blessing! sdfdsf')
})

app.listen(port, () => {
  console.log(`App has started and listening on port ${port}`)
})