const express = require('express')
const router = express.Router();
const controller = require('../controller/controller')


router.get('/', controller.getTop50);

router.get('/api/movies', controller.getMovies);

router.get('/api/television', controller.getTelevision)

router.get('/api/games', controller.getGames);

router.get('/api/music', controller.getMusic);

router.get('/api/books', controller.getEbooks);

router.get('/api/software', controller.getSoftware);

router.get('/search', controller.getSearchResults);






module.exports = router;