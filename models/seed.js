var seeder = require('mongoose-seed')

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI, function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/education.js',
    'models/project.js',
    'models/skill.js'
  ])

  // Clear specified collections
  seeder.clearModels(['Education', 'Project', 'Skill'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      console.log('populate')
    })
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'Education',
    'documents': [
      {
        school: "St.Margaret's Primary School",
        duration: '1999 - 2004'
      },
      {
        school: "St.Margaret's Secondary School",
        duration: '2005 - 2008'
      },
      {
        school: 'Anglo-Chinese Junior College',
        duration: '2009 - 2010'
      },
      {
        school: 'National University of Singapore(School of Design and Environment)',
        duration: '2011 - 2015'
      },
      {
        school: 'ETH Zurich',
        duration: '2013'
      },
      {
        school: 'General Assembly Web-Development Immersive',
        duration: '2016 - '
      }
    ]
  },
  {
    'model': 'Project',
    'documents': [
      {
        title: 'Biography',
        description: 'Mini Project 1: Designed a web biography on someone I respect.',
        links: ['http://floatonok.github.io/mini-project-1/'],
        images: ['IMAGE HERE']
        // skills: ['HTML', 'CSS']
      },
      {
        title: 'Trivia Quiz',
        description: 'Project 1A',
        links: ['http://floatonok.github.io/project1-quiz/'],
        images: ['IMAGE HERE']
        // skills: ['HTML', 'CSS', 'Javascript']
      },
      {
        title: 'Snake Game',
        description: 'Project 1B',
        links: ['http://floatonok.github.io/project1-game/'],
        images: ['IMAGE HERE']
        // skills: ['HTML', 'CSS', 'HTML5 Canvas', 'Javascript', 'JQuery']
      },
      {
        title: 'Sake Wiki Page',
        description: 'Mini Project 2',
        links: ['https://dry-mountain-34654.herokuapp.com/'],
        images: ['IMAGE HERE']
        // skills: ['HTML', 'CSS', 'Ruby on Rails', 'Bootstrap']
      },
      {
        title: 'tl:dr',
        description: 'Project 2A',
        links: ['https://mysterious-ridge-15778.herokuapp.com/'],
        images: ['IMAGE HERE']
        // skills: ['HTML', 'CSS', 'Ruby on Rails', 'Bootstrap']
      },
      {
        title: 'Open-Source Collaboration Platform',
        description: 'Project 2B',
        links: ['https://protected-tor-48809.herokuapp.com/'],
        images: ['IMAGE HERE']
        // skills: ['HTML', 'CSS', 'Ruby on Rails', 'Bootstrap']
      },
      {
        title: 'Natural Event Mapper',
        description: 'Mini Project 3A',
        links: ['https://floatonok.github.io/mini-project-3a/'],
        images: ['IMAGE HERE']
        // skills: ['HTML', 'CSS', 'Bootstrap', 'ExpressJS', 'JQuery']
      },
      {
        title: 'About Me API',
        description: 'Mini Project 3B',
        links: [],
        images: ['IMAGE HERE']
        // skills: ['HTML', 'CSS', 'Bootstrap', 'ExpressJS', 'JQuery', 'EmberJS']
      },
      {
        title: 'Readr',
        description: 'Project 3',
        links: ['https://flight846.github.io/readr-client/'],
        images: ['IMAGE HERE']
        // skills: ['HTML', 'CSS', 'Bootstrap', 'ExpressJS', 'JQuery']
      }
    ]
  },
  {
    'model': 'Skill',
    'documents': [
      {
        skill: 'Autodesk AutoCAD',
        proficiency: 9
      },
      {
        skill: 'Rhino',
        proficiency: 8
      },
      {
        skill: 'Sketchup',
        proficiency: 8
      },
      {
        skill: 'Photoshop',
        proficiency: 8
      },
      {
        skill: 'Illustrator',
        proficiency: 8
      },
      {
        skill: 'InDesign',
        proficiency: 9
      },
      {
        skill: 'HTML',
        proficiency: 8
      },
      {
        skill: 'CSS',
        proficiency: 8
      },
      {
        skill: 'git',
        proficiency: 7
      },
      {
        skill: 'Javascript',
        proficiency: 6
      },
      {
        skill: 'Ruby on Rails',
        proficiency: 5
      },
      {
        skill: 'ExpressJS',
        proficiency: 6
      }
    ]
  }
]
