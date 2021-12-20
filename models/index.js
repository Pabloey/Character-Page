const mongoose = require('mongoose')
const AbilitySchema = require('./ability')
const CharacterSchema = require('./character')
const BuildSchema = require('./build')

const Ability = mongoose.model('abilities', AbilitySchema)
const Character = mongoose.model('characters', CharacterSchema)
const Build = mongoose.model('builds', BuildSchema)

module.exports = {
  Ability,
  Character,
  Build
}