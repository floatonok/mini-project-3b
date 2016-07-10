const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// ROOT
router.get('/', (req, res) => {
  res.status(200).json({
    name: 'Isabella Ong Zhixu',
    industry: 'Architecture/Web Development',
    currently: 'Studying at General Assmebly',
    education: 'NUS Bacholar of Arts(Architecture)',
    profile_image: 'https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e15/11024099_436185319871110_1638537240_n.jpg?ig_cache_key=OTM1MzY2NTI1ODUwMjMzODI1.2'
  })
})

// PROFILE
router.get('/profile', (req, res) => {
  res.status(200).json({
    message: 'profile statement goes here'
  })
})

// LINKS
router.get('/links', (req, res) => {
  res.status(200).json({
    links: ['https://github.com/floatonok']
  })
})

var projects = [
  {
    title: 'Biography',
    description: 'Mini Project 1: Designed a web biography on someone I respect. Done using html/css.',
    links: ['http://floatonok.github.io/mini-project-1/'],
    images: ['IMAGE HERE']
  },
  {
    title: 'Trivia Quiz',
    description: '',
    links: [],
    images: []
  },
  {
    title: 'Snake Game',
    description: '',
    links: [],
    images: []
  },
  {
    title: 'Sake Wiki Page',
    description: '',
    links: [],
    images: []
  },
  {
    title: 'tl:dr',
    description: '',
    links: [],
    images: []
  },
  {
    title: 'Open-Source Collaboration Platform',
    description: '',
    links: [],
    images: []
  },
  {
    title: 'Natural Event Mapper',
    description: '',
    links: [],
    images: []
  },
  {
    title: 'About Me API',
    description: '',
    links: [],
    images: []
  }
]
var project_titles = []
var eachProject = function () {
  projects.forEach(function (project) {
    project_titles.push(project.title)
  })
  return project_titles
}
eachProject()

// PROJECTS
router.get('/projects', (req, res) => {
  res.status(200).json({
    projects: project_titles
  })
})

// PROJECTS/:ID
router.get('/projects/:id', (req, res) => {
  res.status(200).json(
    projects[req.params.id - 1]
  )
})

// SKILLS
router.get('/skills', (req, res) => {
  res.status(200).json({
    skills: [{name: 'name', proficiency: 2}]
  })
})

var education = [
  {
    school: "St.Margaret's Primary School",
    duration: '1999 - 2004',
    achievements: []
  },
  {
    school: "St.Margaret's Secondary School",
    duration: '2005 - 2008',
    achievements: []
  },
  {
    school: 'Anglo-Chinese Junior College',
    duration: '2009 - 2010',
    achievements: []
  },
  {
    school: 'National University of Singapore(School of Design and Environment)',
    duration: '2011 - 2015',
    achievements: []
  },
  {
    school: 'ETH Zurich',
    duration: '2013',
    achievements: []
  },
  {
    school: 'General Assembly Web-Development Immersive',
    duration: '2016 - ',
    achievements: []
  }
]
var schools = []
var eachSchool = function () {
  education.forEach(function (edu) {
    schools.push(edu.school)
  })
  return schools
}
eachSchool()

// EDUCATION
router.get('/education', (req, res) => {
  res.status(200).json({
    education: schools
  })
})

// EDUCATION/:ID
router.get('/education/:id', (req, res) => {
  res.status(200).json(
    education[req.params.id - 1]
  )
})

module.exports = router
