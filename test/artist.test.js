const app = require('../app')
const request = require('supertest')(app)
// We will write request instead of request(app) 🡱

const mongoose = require('mongoose')
const { response } = require('../app')
require('../config/test-connection')

describe('Artist requests', () => {
  const newArtist = {
    name: 'An Artist',
    birthDate: 1212,
    knownFor: 'Art',
    country: 'A place',
    arts: [],
  }

  it('Lists every artist', async () => {
    await request.get('/artists').expect(200)
  })

  it('Adds a new artist', async () => {
    const response = await request.post('/artists').send(newArtist).expect(200)
    const newCreatedArtist = response.body

    expect(newCreatedArtist).toMatchObject(newArtist)
    expect(newCreatedArtist.arts).toEqual([])
  })

  it('Fetch the artist', async () => {
    // Creates person
    const response = await request.post('/artists').send(newArtist).expect(200)
    // console.log(response.body);

    // Fetching same person
    // TODO how to extract json without creating new route?
    await request.get(`/artists/${response.body._id}`).expect(200)
    const fetchRes = await request.get(`/artists/${response.body._id}/json`).expect(200)
    // console.log(fetchRes.body);
    expect(fetchRes.body).toMatchObject(newArtist)
  })

  it('Deletes artist', async () => {
    const response = await request.post('/artists').send(newArtist).expect(200)

    const deleteRes = await request.delete(`/artists/${response.body._id}`).expect(200)
    expect(deleteRes.ok).toBe(true)
  })

  it('gets invalid link', async () => {
    const paths = ['asdasqer', '21323', 'Someunreallinks']
    for (link in paths) {
      const response = await request.get(`/artists/${link}`).expect(404)
      expect(response.body == 'Invalid Link')

      const responseJson = await request.get(`/artists/${link}/json`).expect(404)
      expect(responseJson.body == 'Invalid Link')
    }
  })

  afterAll(async () => {
    // Closing the DB connection allows Jest to exit successfully.
    await mongoose.connection.close()
  })
})
