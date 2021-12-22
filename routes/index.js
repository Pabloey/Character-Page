const { Router } = require('express')
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root'))

router.get('/chars/:id', controllers.getCharacters)
router.get('/ability/:id', controllers.getAbilities)

router.get('/chars/builds/:id', controllers.getBuilds)
router.post('/chars/builds/:id', controllers.postBuild)

router.put('/chars/builds/:id', controllers.updateBuild)
router.delete('/chars/builds/:id', controllers.deleteBuild)

module.exports = router