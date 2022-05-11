const mongoose = require('mongoose')
const colors = require('colors')

mongoose.connect('mongodb://127.0.0.1:27017/arts-test-DB')
let db = mongoose.connection
db.on('error', console.error.bind(console, 'Database connection error:'.red))
db.once('open', () => {
  console.log('MongoDB successfully connected'.green)
})