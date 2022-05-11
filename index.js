const app = require('./app')

require('./config/connection')

app.listen('3000', () => {
  console.log('Listening in port http://localhost:3000'.rainbow)
})
