const db = require('../db')
const { Build } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'));

const main = async () => {
  const builds = [
    {
    }
  ]
}