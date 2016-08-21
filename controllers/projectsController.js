const Project = require('../models/project')
const Skill = require('../models/skill')

function checkExistingSkills (skills, project, next, callback) {
  if (!skills) return callback(project)
  skills.forEach((skill) => {
    Skill.findOne({skill: skill}, (err, skillFound) => {
      if (err) return next(err)
      if (!skillFound) {
        console.log('Skill not found. Creating new skill and adding to project')
        new Skill({skill: skill, proficiency: 0}).save((err, skillSaved) => {
          if (err) return next(err)
          project.skills.push(skillSaved)
          if (skills.length === project.skills.length && typeof callback === 'function') callback(project)
        })
      } else {
        console.log('Skill found. Adding skill to project')
        project.skills.push(skillFound)
        if (skills.length === project.skills.length && typeof callback === 'function') callback(project)
      }
    })
  })
}

function getAll (req, res, next) {
  Project.find({}).populate('skills').exec((err, projects) => {
    if (err) return next(err)
    res.status(200).json({projects: projects})
  })
  // Project.find({}, (err, projects) => {
  //   if (err) return next(err)
  //   res.status(200).json({projects: projects})
  // })
}

function createProject (req, res, next) {
  var project = new Project()

  project.title = req.body.title
  project.category = req.body.category
  project.header = req.body.header
  project.description = req.body.description
  project.dataOrder = req.body.dataOrder
  req.body.links.forEach((link) => {
    project.links.push(link)
  })
  req.body.images.forEach((image) => {
    project.images.push(image)
  })
  checkExistingSkills(req.body.skills, project, next, function (project) {
    project.save((err, project) => {
      if (err) return next(err)
      res.status(200).json({project})
    })
  })
}

function getProject (req, res, next) {
  Project.findById({_id: req.params.id}, (err, project) => {
    if (err) return next(err)
    res.status(200).json(project)
  })
}

function updateProject (req, res, next) {
  Project.findById({_id: req.params.id}, (err, project) => {
    if (err) return next(err)
    if (req.body.skills) {
      project.skills = []
    }
    checkExistingSkills(req.body.skills, project, next, function (project) {
      if (req.body.title) project.title = req.body.title
      if (req.body.category) project.category = req.body.category
      if (req.body.header) project.header = req.body.header
      if (req.body.description) project.description = req.body.description
      if (req.body.dataOrder) project.dataOrder = req.body.dataOrder
      if (req.body.links) {
        project.links = []
        req.body.links.forEach((link) => {
          project.links.push(link)
        })
      }
      if (req.body.images) {
        project.images = []
        req.body.images.forEach((image) => {
          project.images.push(image)
        })
      }
      project.save((err, project) => {
        if (err) return next(err)
        res.status(200).json({project})
      })
    })
  })
}

function deleteProject (req, res, next) {
  Project.findById({_id: req.params.id}, (err, project) => {
    if (err) return next(err)
    project.remove((err) => {
      if (err) return next(err)
      res.status(200).json({message: 'Project successfully removed'})
    })
  })
}

module.exports = {
  getAll: getAll,
  createProject: createProject,
  getProject: getProject,
  updateProject: updateProject,
  deleteProject: deleteProject
}
