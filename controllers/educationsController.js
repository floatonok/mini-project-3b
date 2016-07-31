const Education = require('../models/education')

function getAll (req, res, next) {
  Education.find({}, (err, educations) => {
    if (err) return next(err)
    res.status(200).json(educations)
  })
}

function createEducation (req, res, next) {
  var education = new Education()

  education.school = req.body.school
  education.duration = req.body.duration

  education.save((err, education) => {
    if (err) return next(err)
    res.status(200).json({education})
  })
}

function getEducation (req, res, next) {
  Education.findById({_id: req.params.id}, (err, education) => {
    if (err) return next(err)
    res.status(200).json(education)
  })
}

function updateEducation (req, res, next) {
  Education.findById({_id: req.params.id}, (err, education) => {
    if (err) return next(err)
    if (req.body.school) education.school = req.body.school
    if (req.body.duration) education.duration = req.body.duration

    education.save((err, education) => {
      if (err) return next(err)
      res.status(200).json({education})
    })
  })
}

function deleteEducation (req, res, next) {
  Education.findById({_id: req.params.id}, (err, education) => {
    if (err) return next(err)
    education.remove((err) => {
      if (err) return next(err)
      res.status(200).json({message: 'Education successfully removed'})
    })
  })
}

module.exports = {
  getAll: getAll,
  createEducation: createEducation,
  getEducation: getEducation,
  updateEducation: updateEducation,
  deleteEducation: deleteEducation
}
