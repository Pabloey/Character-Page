const { Character, Ability, Build } = require('../models')

// const getAllChar = async (req, res) => {
//   try {
//     const allChar = await Character.find({})
//     return res.status(201).json({
//       allChar
//     })
//   } catch (error) {
//     return res.status(500).json({ error: error.message })
//   }
// }

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

const getBuilds = async (req, res) => {
  try {
    const builds = await Build.find({ build_id: req.params.id });
    return res.status(201).json({
      builds
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const postBuild = async (req, res) => {
  try {
    const build = await new Build(req.body)

    await build.save()
    return res.status(201).json({
      build,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const deleteBuild = async (req, res) => {
  try {
    const builds = await Build.findOneAndDelete({ _id: req.params.id });
    return res.status(201).json({
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  // getAllChar,
  getCharacters,
  postBuild,
  getBuilds,
  deleteBuild,
}