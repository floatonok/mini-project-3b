const mongoose = require('mongoose')

const achievementSchema = new mongoose.Schema({
  achievement: String,
  year: String
})

achievementSchema.pre('save', function (next) {
  let now = new Date()
  this.updated_at = now
  if (!this.created_at) {
    this.created_at = now
  }
  next()
})

const Achievement = mongoose.model('Achievement', achievementSchema)

module.exports = Achievement
