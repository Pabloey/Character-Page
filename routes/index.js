const { Router } = require('express')
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root'))


// router.get('/chars/', controllers.getAllChar)
router.get('/chars/:id', controllers.getCharacters)

router.get('/chars/builds/:id', controllers.getBuilds)
router.post('/chars/builds/:id', controllers.postBuild)

router.delete('/chars/builds/:id', controllers.deleteBuild)


module.exports = router