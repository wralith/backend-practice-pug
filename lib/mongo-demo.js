const mongoose = require('mongoose')
const Artist = require('../models/artist')
require('../config/connection')
const colors = require('colors')
const Art = require('../models/art')

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

const guernica = new Art({
  name: 'Guernica',
  museum: 'Museo Reina Sofía, Madrid, Spain',
  year: 1917,
  country: 'Spain',
})

const saveToDB = async (item, model) => {
  const itemInDB = await model.findOne({ name: item.name })

  if (itemInDB) {
    console.log(`${itemInDB.name} is already exist! ❌`.red)
    return
  }
  await model.create(item)
  console.log(`${item.name} added to database ✅`.green)
}

saveToDB(monet, Artist)
saveToDB(picasso, Artist)
saveToDB(guernica, Art)
