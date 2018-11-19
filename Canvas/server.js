const express = require('express')
var path = require('path');
const port = 3000
const app = express()

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/filling', (req, res) => {
  res.sendFile(path.join(__dirname + '/FillingAText.html'))
})

app.get('/img', (req, res) => {
  res.sendFile(path.join(__dirname + '/images.html'))
})