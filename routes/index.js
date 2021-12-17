const { Router } = require('express')
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root'))

router.get('/chars/:id', controllers.getCharacters)

module.exports = router