const express = require('express')
const app = express()
const colors = require('colors')
const artistsRouter = require('./routes/artists')

app.use(express.json())

require('./config/connection')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/artists', artistsRouter)

app.listen('3000', () => {
  console.log('Listening in port http://localhost:3000'.rainbow)
})
