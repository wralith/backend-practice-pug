const mongoose = require('mongoose')

const ArtSchema = new mongoose.Schema({
  name: String,
  museum: String,
  year: String,
  country: String,
  artist: {
    // Populates with Artist.ObjectID
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
    autopopulate: { maxDepth: 1 }
  }
})

ArtSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Art', ArtSchema)