const mongoose = require('mongoose')

const ArtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  museum: String,
  year: Number,
  country: String,
  artist: {
    // TODO add default unknown 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
    required: true,
    autopopulate: { maxDepth: 1 }
  }
})

ArtSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Art', ArtSchema)