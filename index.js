const express = require('express')
const app = express()
const colors = require('colors')
require('./config/connection')
const Artist = require('./models/artist')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/artists', async (req, res) => {
  const artistList = await Artist.find()
  res.render('artists', { artists : artistList})
})

app.get('/artists/:id', async (req, res) => {
  const id = req.params.id
  const artist = await Artist.findById(id)
  res.render('artist', { artist : artist})
})

app.listen('3000', () => {
  console.log('Listening in port http://localhost:3000'.rainbow)
})
