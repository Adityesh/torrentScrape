const express = require('express')
const router = express.Router();
const controller = require('../controller/controller')


router.get('/', controller.getTop50);

router.get('/movies', controller.getMovies);

router.get('/television', controller.getTelevision)

router.get('/games', controller.getGames);

router.get('/music', controller.getMusic);

router.get('/books', controller.getEbooks);

router.get('/software', controller.getSoftware);






module.exports = router;