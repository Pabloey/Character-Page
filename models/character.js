const mongoose = require('mongoose')

const Character = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: String, required: true },
    origin: { type: String, required: true },
    lore: { type: String, required: true },
    image: { type: String, required: true }
  }
)

modules.export = Character;