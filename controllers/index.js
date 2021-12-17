const { Character, Ability } = require('../models')

const getCharacters = async (req, res) => {

  id = req.params.id
  idCap = id.charAt(0).toUpperCase() + id.slice(1)

  try {
    const character = await Character.findOne({
      name: `${idCap}`
    });
    return res.status(201).json({
      character
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getCharacters,
}