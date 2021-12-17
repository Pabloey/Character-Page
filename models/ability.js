const mongoose = require('mongoose')

const Ability = new mongoose.Schema(
  {
    passive: { type: String, require: true },
    qSkill: { type: String, require: true },
    wSkill: { type: String, require: true },
    eSkill: { type: String, require: true },
    rSkill: { type: String, require: true },
    ability_id: { type: mongoose.Schema.Types.ObjectId, ref: 'abilities' }
  }
)

module.exports = Ability;