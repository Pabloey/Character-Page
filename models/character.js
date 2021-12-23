const mongoose = require('mongoose')

const Character = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: String, required: true },
    origin: { type: String, required: true },
    lore: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String, required: true },
    item1: { type: String, required: true },
    item2: { type: String, required: true },
    item3: { type: String, required: true },
    item4: { type: String, required: true },
    item5: { type: String, required: true },
    item6: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Character;