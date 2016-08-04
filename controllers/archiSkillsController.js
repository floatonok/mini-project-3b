const ArchiSkill = require('../models/archiSkill')

function getAll (req, res, next) {
  ArchiSkill.find({}, (err, archiSkills) => {
    if (err) return next(err)
    res.status(200).json({archiSkills: archiSkills})
  })
}

function createArchiSkill (req, res, next) {
  var archiSkill = new ArchiSkill()

  archiSkill.archiSkill = req.body.archiSkill
  archiSkill.proficiency = req.body.proficiency

  archiSkill.save((err, archiSkill) => {
    if (err) return next(err)
    res.status(200).json({archiSkill})
  })
}

function getArchiSkill (req, res, next) {
  ArchiSkill.findById({_id: req.params.id}, (err, archiSkill) => {
    if (err) return next(err)
    res.status(200).json(archiSkill)
  })
}

function updateArchiSkill (req, res, next) {
  ArchiSkill.findById({_id: req.params.id}, (err, archiSkill) => {
    if (err) return next(err)
    if (req.body.archiSkill) archiSkill.archiSkill = req.body.archiSkill
    if (req.body.proficiency) archiSkill.proficiency = req.body.proficiency

    archiSkill.save((err, archiSkill) => {
      if (err) return next(err)
      res.status(200).json({archiSkill})
    })
  })
}

function deleteArchiSkill (req, res, next) {
  ArchiSkill.findById({_id: req.params.id}, (err, archiSkill) => {
    if (err) return next(err)
    archiSkill.remove((err) => {
      if (err) return next(err)
      res.status(200).json({message: 'ArchiSkill successfully removed'})
    })
  })
}

module.exports = {
  getAll: getAll,
  createArchiSkill: createArchiSkill,
  getArchiSkill: getArchiSkill,
  updateArchiSkill: updateArchiSkill,
  deleteArchiSkill: deleteArchiSkill
}
