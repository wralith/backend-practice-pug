const BaseService = require('./base-service')
const ArtistModel = require('../models/artist')

class ArtistService extends BaseService {
  model = ArtistModel

  async addArt(artist, art) {
    artist.arts.push(art)
    await artist.save()
  }
}

module.exports = new ArtistService()
