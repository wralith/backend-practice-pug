const mongoose = require('mongoose')

const ArtistSchema = new mongoose.Schema({
  name: String,
  birthDate: String,
  knownFor: String,
  country: String,
  // arts: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Art',
  //     autopopulate: { maxDepth: 2 },
  //   },
  // ],
})

ArtistSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Artist', ArtistSchema)
