const mongoose = require('mongoose')
const Artist = require('../models/artist')
require('../config/connection')
const colors = require('colors')

const monet = new Artist({
  name: 'Claude Monet',
  birthDate: 1840,
  knownFor: 'Impressionism',
  country: 'France',
})

const picasso = new Artist({
  name: 'Pablo Picasso',
  birthDate: 1881,
  knownFor: 'Cubism',
  country: 'Spain',
})

const saveToDB = async item => {
  const artists = await Artist.findOne({ name: item.name })


  if (!artists) {
    await item.save()
    console.log(`${item.name} added to database ✅`.green)
  } else {
    console.log(`${artists.name} is already exist! ❌`.red)
  }
}

saveToDB(monet)
saveToDB(picasso)
