const Achievement = require('../models/achievement')

function getAll (req, res, next) {
  Achievement.find({}, (err, achievements) => {
    if (err) return next(err)
    res.status(200).json({achievements: achievements})
  })
}

function createAchievement (req, res, next) {
  var achievement = new Achievement()

  achievement.school = req.body.school
  achievement.duration = req.body.duration

  achievement.save((err, achievement) => {
    if (err) return next(err)
    res.status(200).json({achievement})
  })
}

function getAchievement (req, res, next) {
  Achievement.findById({_id: req.params.id}, (err, achievement) => {
    if (err) return next(err)
    res.status(200).json({achievement: achievement})
  })
}

function updateAchievement (req, res, next) {
  Achievement.findById({_id: req.params.id}, (err, achievement) => {
    if (err) return next(err)
    if (req.body.school) achievement.school = req.body.school
    if (req.body.duration) achievement.duration = req.body.duration

    achievement.save((err, achievement) => {
      if (err) return next(err)
      res.status(200).json({achievement})
    })
  })
}

function deleteAchievement (req, res, next) {
  Achievement.findById({_id: req.params.id}, (err, achievement) => {
    if (err) return next(err)
    achievement.remove((err) => {
      if (err) return next(err)
      res.status(200).json({message: 'Achievement successfully removed'})
    })
  })
}

module.exports = {
  getAll: getAll,
  createAchievement: createAchievement,
  getAchievement: getAchievement,
  updateAchievement: updateAchievement,
  deleteAchievement: deleteAchievement
}
