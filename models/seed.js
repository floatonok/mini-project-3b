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
    'models/skill.js',
    'models/achievement.js'
  ])

  // Clear specified collections
  seeder.clearModels(['Education', 'Project', 'Skill', 'Achievement'], function () {
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
        category: 'webdev',
        skill: 'HTML',
        proficiency: 9
      },
      {
        category: 'webdev',
        skill: 'CSS',
        proficiency: 8
      },
      {
        category: 'webdev',
        skill: 'JQuery',
        proficiency: 8
      },
      {
        category: 'webdev',
        skill: 'Javascript',
        proficiency: 8
      },
      {
        category: 'webdev',
        skill: 'Canvas',
        proficiency: 8
      },
      {
        category: 'webdev',
        skill: 'Git',
        proficiency: 7
      },
      {
        category: 'webdev',
        skill: 'Ruby on Rails',
        proficiency: 6
      },
      {
        category: 'webdev',
        skill: 'EmberJS',
        proficiency: 5
      },
      {
        category: 'webdev',
        skill: 'ExpressJS',
        proficiency: 6
      },
      {
        category: 'archi',
        skill: 'AutoCAD',
        proficiency: 9
      },
      {
        category: 'archi',
        skill: 'Rhino',
        proficiency: 8
      },
      {
        category: 'archi',
        skill: 'SketchUp',
        proficiency: 8
      },
      {
        category: 'archi',
        skill: 'Photoshop',
        proficiency: 8
      },
      {
        category: 'archi',
        skill: 'Illustrator',
        proficiency: 8
      },
      {
        category: 'archi',
        skill: 'InDesign',
        proficiency: 9
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
        school: 'NUS (School of Design and Environment)',
        duration: '2011 - 2015'
      },
      {
        school: 'ETH Zurich',
        duration: '2013'
      },
      {
        school: 'General Assembly, Web-Development Immersive',
        duration: '2016'
      }
    ]
  },
  {
    'model': 'Achievement',
    'documents': [
      {
        achievement: 'London Internet Museum Competition (Honorable Mention)',
        year: '2016'
      },
      {
        achievement: 'Vertical Cities Asia Compeition (Honorable Mention)',
        year: '2015'
      },
      {
        achievement: 'CityEx Exhibition (Project: Walled Campus)',
        year: '2015'
      },
      {
        achievement: 'ETH Summer School (Designboom Feature)',
        year: '2013'
      },
      {
        achievement: 'CityEx Exhibition (Project: Panopticon Inn)',
        year: '2013'
      },
      {
        achievement: "Dean's List",
        year: '2012'
      },
      {
        achievement: 'A Levels 6 Distinctions',
        year: '2010'
      },
      {
        achievement: 'O Levels 8 Distinctions',
        year: '2008'
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
        dataOrder: 8,
        images: ['IMAGE HERE']
      // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'})]
      },
      {
        title: 'Trivia Quiz',
        description: 'Project 1A',
        links: ['http://floatonok.github.io/project1-quiz/'],
        dataOrder: 9,
        images: ['IMAGE HERE']
      // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Javascript'})]
      },
      {
        title: 'Snake Game',
        description: 'Project 1B',
        links: ['http://floatonok.github.io/project1-game/'],
        dataOrder: 3,
        images: ['IMAGE HERE']
      // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Canvas'}), Skill.findOne({skill: 'Javascript'}), Skill.findOne({skill: 'JQuery'})]
      },
      {
        title: 'Sake Wiki Page',
        description: 'Mini Project 2',
        links: ['https://dry-mountain-34654.herokuapp.com/'],
        dataOrder: 4,
        images: ['IMAGE HERE']
      // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Ruby on Rails'}), Skill.findOne({skill: 'Bootstrap'})]
      },
      {
        title: 'tl:dr',
        description: 'Project 2A',
        links: ['https://mysterious-ridge-15778.herokuapp.com/'],
        dataOrder: 7,
        images: ['IMAGE HERE']
      // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Ruby on Rails'}), Skill.findOne({skill: 'Bootstrap'})]
      },
      {
        title: 'Open-Source Collaboration Platform',
        description: 'Project 2B',
        links: ['https://protected-tor-48809.herokuapp.com/'],
        dataOrder: 5,
        images: ['IMAGE HERE']
      // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Ruby on Rails'}), Skill.findOne({skill: 'Bootstrap'})]
      },
      {
        title: 'Natural Event Mapper',
        description: 'Mini Project 3A',
        links: ['https://floatonok.github.io/mini-project-3a/'],
        dataOrder: 6,
        images: ['IMAGE HERE']
      // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Bootstrap'}), Skill.findOne({skill: 'ExpressJS'}), Skill.findOne({skill: 'JQuery'})]
      },
      {
        title: 'api dot me / portfolio',
        description: 'Mini Project 3B',
        links: [],
        dataOrder: 1,
        images: ['IMAGE HERE']
      // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Bootstrap'}), Skill.findOne({skill: 'ExpressJS'}), Skill.findOne({skill: 'JQuery'}), Skill.findOne({skill: 'EmberJS'})]
      },
      {
        title: 'Readr',
        description: 'Project 3',
        links: ['https://flight846.github.io/readr-client/'],
        dataOrder: 2,
        images: ['IMAGE HERE']
      // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Bootstrap'}), Skill.findOne({skill: 'ExpressJS'}), Skill.findOne({skill: 'JQuery'})]
      }
    ]
  }
]
