const router = require('express').Router()

const ArtistService = require('../services/artist-service')
const ArtService = require('../services/art-service')

router.get('/', async (req, res) => {
  const artistList = await ArtistService.findAll()

  res.render('artists', { artists : artistList})
})

router.post('/', async (req, res) => {
  const artist = await ArtistService.add(req.body)
  res.send(artist)
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const artist = await ArtistService.find(id)
  res.render('artist', { artist : artist})
})

router.post('/:id', async (req, res) => {
  const id = await ArtistService.find(req.params.id)
  const art = await ArtService.add(req.body)
  await ArtistService.addArt(id, art)
  
  res.send(art)
})

router.get('/:id/arts', async (req, res) => {

})


module.exports = router