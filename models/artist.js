const mongoose = require('mongoose')

const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  birthDate: {
    type: Number,
    default: 0
  },
  knownFor: String,
  country: String,
  arts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Art',
      autopopulate: { maxDepth: 2 },
    },
  ],
})

ArtistSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Artist', ArtistSchema)
