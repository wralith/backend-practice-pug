const BaseService = require('./base-service')
const ArtModel = require('../models/art')


class ArtService extends BaseService {
  model = ArtModel

  
}

module.exports = new ArtService()