const mongoose = require('mongoose')

const Build = new mongoose.Schema(
  {
    item1: { type: String, required: true },
    item2: { type: String, required: true },
    item3: { type: String, required: true },
    item4: { type: String, required: true },
    item5: { type: String, required: true },
    item6: { type: String, required: true },
    build_id: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Build;