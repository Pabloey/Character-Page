const mongoose = require('mongoose')
const AbilitySchema = require('./ability')
const CharacterSchema = require('./character')
const ItemSchema = require('./item')

const Ability = mongoose.model('abilities', AbilitySchema)
const Character = mongoose.model('characters', CharacterSchema)
const Item = mongoose.model('items', ItemSchema)

module.exports = {
  Ability,
  Character,
  Item
}