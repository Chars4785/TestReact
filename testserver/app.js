
const cors = require('cors');
const express = require('express')
const app = express()
const port = 3333
// app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})