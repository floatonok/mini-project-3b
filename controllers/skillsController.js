const Skill = require('../models/skill')

function getAll (req, res, next) {
  Skill.find({}, (err, skills) => {
    if (err) return next(err)
    res.status(200).json(skills)
  })
}

function createSkill (req, res, next) {
  var skill = new Skill()

  skill.skill = req.body.skill
  skill.proficiency = req.body.proficiency

  skill.save((err, skill) => {
    if (err) return next(err)
    res.status(200).json({skill})
  })
}

function getSkill (req, res, next) {
  Skill.findById({_id: req.params.id}, (err, skill) => {
    if (err) return next(err)
    res.status(200).json(skill)
  })
}

function updateSkill (req, res, next) {
  Skill.findById({_id: req.params.id}, (err, skill) => {
    if (err) return next(err)
    if (req.body.skill) skill.skill = req.body.skill
    if (req.body.proficiency) skill.proficiency = req.body.proficiency

    skill.save((err, skill) => {
      if (err) return next(err)
      res.status(200).json({skill})
    })
  })
}

function deleteSkill (req, res, next) {
  Skill.findById({_id: req.params.id}, (err, skill) => {
    if (err) return next(err)
    skill.remove((err) => {
      if (err) return next(err)
      res.status(200).json({message: 'Skill successfully removed'})
    })
  })
}

module.exports = {
  getAll: getAll,
  createSkill: createSkill,
  getSkill: getSkill,
  updateSkill: updateSkill,
  deleteSkill: deleteSkill
}
