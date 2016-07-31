const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
  skill: String,
  proficiency: Number
})

skillSchema.pre('save', function (next) {
  let now = new Date()
  this.updated_at = now
  if (!this.created_at) {
    this.created_at = now
  }
  next()
})

const Skill = mongoose.model('Skill', skillSchema)

module.exports = Skill
