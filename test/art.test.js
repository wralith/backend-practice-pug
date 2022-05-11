const app = require('../app')
const request = require('supertest')(app)
// We will write request instead of request(app) 🡱

const mongoose = require('mongoose')
require('../config/test-connection')

describe('Art requests', () => {
  const newArtist = {
    name: 'An Artist',
    birthDate: 1212,
    knownFor: 'Art',
    country: 'A place',
    arts: [],
  }

  const newArt = {
    name: 'Testere',
    museum: 'Palace',
    year: 2021,
    country: 'Place on Earth',
    artist: '',
  }

  it('Crates art and populates array arts in artist object', async () => {
    // Creates artists
    const responseArtist = await request.post('/artists').send(newArtist).expect(200)
    newArt.artist = responseArtist.body._id
    // Creates art
    const newCreatedArt = await request
      .post(`/artists/${responseArtist.body._id}`)
      .send(newArt)
      .expect(200)

    expect(newCreatedArt.body.artist).toHaveProperty('_id', newArt.artist)
  })

  afterAll(async () => {
    // Closing the DB connection allows Jest to exit successfully.
    await mongoose.connection.close()
  })
})
