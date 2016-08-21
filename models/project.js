const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  title: String,
  category: String,
  header: String,
  description: String,
  links: Array,
  images: Array,
  dataOrder: Number,
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }]
})

projectSchema.pre('save', function (next) {
  let now = new Date()
  this.updated_at = now
  if (!this.created_at) {
    this.created_at = now
  }
  next()
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
