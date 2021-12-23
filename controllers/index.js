const { Character, Ability, Build } = require('../models')

//getCharacters gets all character info according to req.params.id which is character names.
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

//getAbilities gets specific abilities per id which is character name
const getAbilities = async (req, res) => {

  id = req.params.id
  idCap = id.charAt(0).toUpperCase() + id.slice(1)

  try {
    const abilities = await Ability.findOne({
      ability_id: `${idCap}`
    });
    return res.status(201).json({
      abilities
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

//getBuild gets specific builds to req.params.id which is character names.
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

//getBuild gets one specific build. Similar to getBuilds, but it's specific ID
const getBuild = async (req, res) => {
  try {
    const build = await Build.find({ _id: req.params.id });
    return res.status(201).json({
      build
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

//postBuild is posting everything inside of req.body to the route database
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

//deleteBuild is deleting specific build per req.params.id which is _id, unique id per object
const deleteBuild = async (req, res) => {
  try {
    const builds = await Build.findOneAndDelete({ _id: req.params.id });
    return res.status(201).json({
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const updateBuild = async (req, res) => {
  try {
    const update = await Build.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(201).json({
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}


module.exports = {
  getAbilities,
  getCharacters,
  postBuild,
  getBuilds,
  deleteBuild,
  getBuild,
  updateBuild,
}