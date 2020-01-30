const express = require('express')

const routes = express.Router()

const HintController = require('./controllers/HintController')

routes.get('/hint', HintController.recommendedPlaylist)

module.exports = routes


