var seeder = require('mongoose-seed')
// const Skill = require('../models/skill')

// console.log('start')
// const HTML = Skill.create({skill: 'HTML', proficiency: 8})
// const CSS = Skill.create({skill: 'CSS', proficiency: 8})
// const Canvas = Skill.create({skill: 'Canvas', proficiency: 6})
// const JQuery = Skill.create({skill: 'JQuery', proficiency: 6})
// const Javascript = Skill.create({skill: 'Javascript', proficiency: 8})
// const rubyOnRails = Skill.create({skill: 'Ruby on Rails', proficiency: 7})
// const Bootstrap = Skill.create({skill: 'Bootstrap', proficiency: 7})
// const ExpressJS = Skill.create({skill: 'ExpressJS', proficiency: 4})
// const EmberJS = Skill.create({skill: 'EmberJS', proficiency: 4})
// console.log('end')
// const Git = Skill.create({skill: 'Git', proficiency: 7})
// const AutoCAD = Skill.create({skill: 'AutoCAD', proficiency: 9})
// const Rhino = Skill.create({skill: 'Rhino', proficiency: 8})
// const Sketchup = Skill.create({skill: 'Sketchup', proficiency: 8})
// const Photoshop = Skill.create({skill: 'Photoshop', proficiency: 8})
// const Illustrator = Skill.create({skill: 'Illustrator', proficiency: 8})

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
    'model': 'Skill',
    'documents': [
      {
        skill: 'Canvas',
        proficiency: 9
      },
      {
        skill: 'JQuery',
        proficiency: 8
      },
      {
        skill: 'EmberJS',
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
        skill: 'Git',
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
  },
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
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'})]
      },
      {
        title: 'Trivia Quiz',
        description: 'Project 1A',
        links: ['http://floatonok.github.io/project1-quiz/'],
        images: ['IMAGE HERE']
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Javascript'})]
      },
      {
        title: 'Snake Game',
        description: 'Project 1B',
        links: ['http://floatonok.github.io/project1-game/'],
        images: ['IMAGE HERE']
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Canvas'}), Skill.findOne({skill: 'Javascript'}), Skill.findOne({skill: 'JQuery'})]
      },
      {
        title: 'Sake Wiki Page',
        description: 'Mini Project 2',
        links: ['https://dry-mountain-34654.herokuapp.com/'],
        images: ['IMAGE HERE']
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Ruby on Rails'}), Skill.findOne({skill: 'Bootstrap'})]
      },
      {
        title: 'tl:dr',
        description: 'Project 2A',
        links: ['https://mysterious-ridge-15778.herokuapp.com/'],
        images: ['IMAGE HERE']
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Ruby on Rails'}), Skill.findOne({skill: 'Bootstrap'})]
      },
      {
        title: 'Open-Source Collaboration Platform',
        description: 'Project 2B',
        links: ['https://protected-tor-48809.herokuapp.com/'],
        images: ['IMAGE HERE']
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Ruby on Rails'}), Skill.findOne({skill: 'Bootstrap'})]
      },
      {
        title: 'Natural Event Mapper',
        description: 'Mini Project 3A',
        links: ['https://floatonok.github.io/mini-project-3a/'],
        images: ['IMAGE HERE']
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Bootstrap'}), Skill.findOne({skill: 'ExpressJS'}), Skill.findOne({skill: 'JQuery'})]
      },
      {
        title: 'About Me API',
        description: 'Mini Project 3B',
        links: [],
        images: ['IMAGE HERE']
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Bootstrap'}), Skill.findOne({skill: 'ExpressJS'}), Skill.findOne({skill: 'JQuery'}), Skill.findOne({skill: 'EmberJS'})]
      },
      {
        title: 'Readr',
        description: 'Project 3',
        links: ['https://flight846.github.io/readr-client/'],
        images: ['IMAGE HERE']
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Bootstrap'}), Skill.findOne({skill: 'ExpressJS'}), Skill.findOne({skill: 'JQuery'})]
      }
    ]
  }
]
