const mongoose = require('mongoose')

const archiSkillSchema = new mongoose.Schema({
  skill: String,
  proficiency: Number
})

archiSkillSchema.pre('save', function (next) {
  let now = new Date()
  this.updated_at = now
  if (!this.created_at) {
    this.created_at = now
  }
  next()
})

const ArchiSkill = mongoose.model('ArchiSkill', archiSkillSchema)

module.exports = ArchiSkill
