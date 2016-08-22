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
        proficiency: 7
      },
      {
        category: 'webdev',
        skill: 'Javascript',
        proficiency: 8
      },
      {
        category: 'webdev',
        skill: 'Canvas',
        proficiency: 7
      },
      {
        category: 'webdev',
        skill: 'Git',
        proficiency: 8
      },
      {
        category: 'webdev',
        skill: 'Ruby on Rails',
        proficiency: 7
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
        school: 'General Assembly, Web-Development Immersive',
        duration: '2016'
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
        school: 'Anglo-Chinese Junior College',
        duration: '2009 - 2010'
      },
      {
        school: "St.Margaret's Secondary School",
        duration: '2005 - 2008'
      },
      {
        school: "St.Margaret's Primary School",
        duration: '1999 - 2004'
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
        title: 'Snake Game',
        category: 'webdev',
        header: 'A twist on the classic game of Snake, and some dope beats from a friend who spins.',
        description: 'Drawing inspiration from snake games like <em>Curvatron</em>, I wanted to build a minimalist game design for snake with geometrical obstacles that the player can activate. As this game was designed for web browsers, the player has the vast landscape of the browser to manoeuvre around to get the apples, so the fun starts when the obstacles are activated. For every obstacle level activated, a sound loop will be layered.<br><br>Built with HTML Canvas, Javascript, HTML/CSS. Sounds provided by <a href=”https://soundcloud.com/7incey”>DJ Lincey</a>.',
        links: ['http://floatonok.github.io/project1-game/', 'https://github.com/floatonok/project1-game'],
        images: ['https://github.com/floatonok/portfolio/blob/master/public/projects/snake.gif?raw=true']
        // dataOrder: 3,
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Canvas'}), Skill.findOne({skill: 'Javascript'}), Skill.findOne({skill: 'JQuery'})]
      },
      {
        title: 'Housing 2050',
        category: 'webdev',
        header: 'A fun, experimental project that envisions the interface of how, in the future, people can choose where and how to live.',
        description: 'Final project for General Assembly’s WDI course. With all the buzz on participatory design in architecture, there has been countless architecture proposals to utilise web/mobile applications to allow residents to design and be in charge of their own housing. This project envisions how these applications might be like.<br><br>In the future where plug-and-play housing is possible, where architects only build the structure of high-rise living and where residents control where and how they live, residents can move and expand their home from one spot to another with just a click of a button. They can manage the size and occupancy of their homes via a dashboard, and check on their neighbours.<br><br>To create usability amongst the masses, the interface is simple, colourful and gamified. Built over one week using Ember.js as the front-end framework, and Rails API for the back-end.',
        links: [],
        images: ['IMAGE HERE']
        // dataOrder: 3,
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Canvas'}), Skill.findOne({skill: 'Javascript'}), Skill.findOne({skill: 'JQuery'})]
      },
      {
        title: 'Readr',
        category: 'webdev',
        header: 'So darn annoyed with all the junk and ads that clutters articles we read online… so we created a platform where you upload an online article and we’ll clean it for you. NO MORE INTERNET JUNK.',
        description: 'Users can upload articles from any online source and READR will, via <em>Diffbot</em>, scrape the title, images, body and tags and present them in a clean, standard format for easy reading. READR will also generate a TL;DR based on the article body, and users can upload their own TL;DRs for that article. All in all, READR aggregates, curates and serves better articles.<br><br>A group project done with <a href=” https://github.com/davified”>David</a>, <a href=” https://github.com/flight846”>Yazid</a> and <a href=” https://github.com/byebye321”>Steph</a>. Built with Node.js / Express.js for the back-end API, and AJAX calls from the front-end.',
        links: ['https://flight846.github.io/readr-client/', 'https://github.com/flight846/readr-client', 'https://github.com/davified/readr'],
        images: ['IMAGE HERE']
        // dataOrder: 2,
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Bootstrap'}), Skill.findOne({skill: 'ExpressJS'}), Skill.findOne({skill: 'JQuery'})]
      },
      {
        title: 'api dot me / portfolio',
        category: 'webdev',
        header: 'A project to learn Ember.js, and have fun with animated SVGs!',
        description: 'Web-ception! This very website you’re on right now. A project for me to get into the groove of using Ember.js, and to build a space for me to present my works.<br><br>Built with Ember.js for the front-end that consumes a back-end API build with Node.js / Express.js. Some dependencies include vivus, wow, mixitup and chartjs',
        links: ['http://www.isabellaong.me/', '', 'https://github.com/floatonok/mini-project-3b'],
        images: ['IMAGE HERE']
        // dataOrder: 1,
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Bootstrap'}), Skill.findOne({skill: 'ExpressJS'}), Skill.findOne({skill: 'JQuery'}), Skill.findOne({skill: 'EmberJS'})]
      },
      {
        title: 'Co-Lab',
        category: 'webdev',
        header: 'Behance X Github. A collaboration platform for designers to create open-source projects for others to join in.',
        description: 'Designers are jumping onto the open-source bandwagon, but there are not many open-source platforms for them to do so. The Co-Lab allows users to create project that lets other users to join in and collaborate. Every project page is like a room where collaborators can discuss and upload raw, work-in-progress images, which other users can download and work on. Users can send messages to others to find like-minded people to work on new projects together.<br><br>Built on Ruby on Rails, with the <a href=” https://github.com/mailboxer/mailboxer”>Mailboxer gem</a>',
        links: ['https://protected-tor-48809.herokuapp.com/', 'https://github.com/floatonok/common-ground'],
        images: ['https://github.com/floatonok/portfolio/blob/master/public/projects/collab.gif?raw=true']
        // dataOrder: 5,
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Ruby on Rails'}), Skill.findOne({skill: 'Bootstrap'})]
      },
      {
        title: 'Biography',
        category: 'webdev',
        header: 'A biography on the radical, Italian architecture group, SUPERSTUDIO.',
        description: 'First project as a General Assembly student. We were tasked to design an online biography on someone we admire, and so I did mine on SUPERSTUDIO ‘cause they are really cool and forward-thinking for their time.<br><br>Built with HTML, CSS and lots of flexbox-ing.',
        links: ['http://floatonok.github.io/mini-project-1/', 'https://github.com/floatonok/mini-project-1'],
        images: ['https://github.com/floatonok/portfolio/blob/master/public/projects/biography.gif?raw=true']
        // dataOrder: 8,
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'})]
      },
      {
        title: 'Natural Event Mapper',
        category: 'webdev',
        header: 'A front-end project that consumes NASA’s EONET API to map out natural events occurring around the world.',
        description: 'A simple front-end project to consume NASA’s Earth Observatory Natural Event Tracker <a href="http://eonet.sci.gsfc.nasa.gov/api/v2.1/events">(EONET) API</a>. The map was done using <em>mapbox</em> which maps out events based on the geoJSON coordinates called from the external API. My first foray into the world of APIs and I am never looking back.<br><br>Built using AJAX and JQuery.',
        links: ['https://floatonok.github.io/mini-project-3a/', 'https://github.com/floatonok/mini-project-3a'],
        images: ['https://github.com/floatonok/portfolio/blob/master/public/projects/mapper.gif?raw=true']
        // dataOrder: 6,
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Bootstrap'}), Skill.findOne({skill: 'ExpressJS'}), Skill.findOne({skill: 'JQuery'})]
      },
      {
        title: 'Sake Wiki Page',
        category: 'webdev',
        header: 'Sake is good for your body and soul. Which is why I created a wiki to educate the people on the goodness of sake.',
        description: 'A project to help us be more familiar with Ruby on Rails, user authentication and the concept of CRUD. It was also my first attempt to use bootstrap, and the start of a beautiful friendship with it.',
        links: ['https://dry-mountain-34654.herokuapp.com/'],
        images: ['https://github.com/floatonok/portfolio/blob/master/public/projects/sake.gif?raw=true']
        // dataOrder: 4,
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Ruby on Rails'}), Skill.findOne({skill: 'Bootstrap'})]
      },
      {
        title: 'tl:dr',
        category: 'webdev',
        header: 'Read TL;DRs first before committing to the whole article. Because life is too short to waste on bad articles.',
        description: 'As a web user who is constantly being bombarded with clickbait articles and often regretting the minutes wasted reading terrible articles, I have made it my lifelong mission to make it mandatory to have honest and truthful summaries of every online article for people to read before committing that 7 minutes to reading it. And hence this project.<br><br>Built using Ruby on Rails.',
        links: ['https://mysterious-ridge-15778.herokuapp.com/', 'https://github.com/floatonok/tl-dr'],
        images: ['https://github.com/floatonok/portfolio/blob/master/public/projects/tldr.gif?raw=true']
        // dataOrder: 7,
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Ruby on Rails'}), Skill.findOne({skill: 'Bootstrap'})]
      },
      {
        title: 'Trivia Quiz',
        category: 'webdev',
        header: 'Get your trivia game on.',
        description: 'A simple quiz built using HTML, CSS and Javascript where players take turn to answer true or false to trivia questions. Best out of ten wins. Yay.',
        links: ['http://floatonok.github.io/project1-quiz/', 'https://github.com/floatonok/project1-quiz'],
        images: ['https://github.com/floatonok/portfolio/blob/master/public/projects/quiz.gif?raw=true']
        // dataOrder: 9,
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Javascript'})]
      },
      {
        title: 'Big Data as a Lover',
        category: 'archi',
        header: '',
        description: 'Bee Breeders London Internet Museum (Honorable Mention)',
        links: [],
        images: ['IMAGE HERE']
        // dataOrder: 10,
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Bootstrap'}), Skill.findOne({skill: 'ExpressJS'}), Skill.findOne({skill: 'JQuery'})]
      },
      {
        title: 'The Collab-oratory',
        category: 'archi',
        header: '',
        description: 'Vertical Cities Asia Compeition 2015 (Honorable Mention)',
        links: [],
        images: ['IMAGE HERE']
        // dataOrder: 10,
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Bootstrap'}), Skill.findOne({skill: 'ExpressJS'}), Skill.findOne({skill: 'JQuery'})]
      },
      {
        title: 'Walled Campus',
        category: 'archi',
        header: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        links: [],
        images: ['IMAGE HERE']
        // dataOrder: 10,
        // skills: [Skill.findOne({skill: 'HTML'}), Skill.findOne({skill: 'CSS'}), Skill.findOne({skill: 'Bootstrap'}), Skill.findOne({skill: 'ExpressJS'}), Skill.findOne({skill: 'JQuery'})]
      }
    ]
  }
]
