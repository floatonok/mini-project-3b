const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
  school: String,
  duration: String
})

educationSchema.pre('save', function (next) {
  let now = new Date()
  this.updated_at = now
  if (!this.created_at) {
    this.created_at = now
  }
  next()
})

const Education = mongoose.model('Education', educationSchema)

module.exports = Education
