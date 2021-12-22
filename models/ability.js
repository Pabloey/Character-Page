const mongoose = require('mongoose')

const Ability = new mongoose.Schema(
  {
    pSkill: { type: String, require: true },
    pImage: { type: String, require: true },
    pDes: { type: String, require: true },
    qSkill: { type: String, require: true },
    qImage: { type: String, require: true },
    qDes: { type: String, require: true },
    wSkill: { type: String, require: true },
    wImage: { type: String, require: true },
    wDes: { type: String, require: true },
    eSkill: { type: String, require: true },
    eImage: { type: String, require: true },
    eDes: { type: String, require: true },
    rSkill: { type: String, require: true },
    rImage: { type: String, require: true },
    rDes: { type: String, require: true },
    ability_id: { type: String, ref: 'characters' }
  },
  { timestamps: true }
)

module.exports = Ability;