const colors = require('colors')
const artistsRouter = require('./routes/artists')
const express = require('express')

const app = express()
app.use(express.json())



app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/artists', artistsRouter)

module.exports = app
