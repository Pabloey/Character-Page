const mongoose = require('mongoose')

const Build = new mongoose.Schema(
  {
    item1: { type: String, required: true },
    item2: { type: String, required: true },
    item3: { type: String, required: true },
    item4: { type: String, required: true },
    item5: { type: String, required: true },
    item6: { type: String, required: true },
    item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'characters' }
  }
)

module.exports = Build;