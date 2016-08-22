const express = require('express')
const router = express.Router()
const projectsController = require('../controllers/projectsController')
const skillsController = require('../controllers/skillsController')
// const archiSkillsController = require('../controllers/archiSkillsController')
const educationsController = require('../controllers/educationsController')
const achievementsController = require('../controllers/achievementsController')

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, OPTIONS')
  next()
})

// ROOT
router.get('/', (req, res) => {
  res.status(200).json({
    name: 'Isabella Ong Zhixu',
    industry: 'Architecture/Web Development',
    currently: 'Studying at General Assembly',
    education: 'NUS Bacholar of Arts(Architecture)',
    profile_image: 'https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e15/11024099_436185319871110_1638537240_n.jpg?ig_cache_key=OTM1MzY2NTI1ODUwMjMzODI1.2'
  })
})

// PROFILE
router.get('/profiles', (req, res) => {
  res.status(200).json({profiles: {
    _id: 1,
    name: 'Isabella Ong Zhixu',
    industry: 'Architecture/Web Development',
    currently: 'Coder / architecture student. Fascinated with big ideas, loves making things, and believes in always challenging the status quo.',
    education: 'NUS Bacholar of Arts(Architecture)',
    profile_image: 'https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e15/11024099_436185319871110_1638537240_n.jpg?ig_cache_key=OTM1MzY2NTI1ODUwMjMzODI1.2'
  }
  })
})

// LINKS
router.get('/links', (req, res) => {
  res.status(200).json({links: [
    {
      website: 'github',
      'url': 'https://github.com/floatonok',
      'icon': 'icons/github.svg'
    },
    {
      website: 'facebook',
      'url': 'https://www.facebook.com/floatonok',
      'icon': 'icons/facebook.svg'
    },
    {
      website: 'instagram',
      'url': 'https://www.instagram.com/floatono.k',
      'icon': 'icons/instagram.svg'
    },
    {
      website: 'linkedin',
      'url': 'https://www.linkedin.com/in/isabellaongzhixu',
      'icon': 'icons/linkedin.svg'
    }
  ]})
})

// PROJECTS
router.route('/projects')
.get(projectsController.getAll)
.post(projectsController.createProject)

router.route('/projects/:id')
.get(projectsController.getProject)
.patch(projectsController.updateProject)
.delete(projectsController.deleteProject)

// SKILLS
router.route('/skills')
.get(skillsController.getAll)
.post(skillsController.createSkill)

router.route('/skills/:id')
.get(skillsController.getSkill)
.patch(skillsController.updateSkill)
.delete(skillsController.deleteSkill)

// EDUCATION
router.route('/educations')
.get(educationsController.getAll)
.post(educationsController.createEducation)

router.route('/educations/:id')
.get(educationsController.getEducation)
.patch(educationsController.updateEducation)
.delete(educationsController.deleteEducation)

// ACHIEVEMENTS
router.route('/achievements')
.get(achievementsController.getAll)
.post(achievementsController.createAchievement)

router.route('/achievements/:id')
.get(achievementsController.getAchievement)
.patch(achievementsController.updateAchievement)
.delete(achievementsController.deleteAchievement)

module.exports = router
