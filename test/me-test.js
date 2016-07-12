/* globals describe it*/
const expect = require('chai').expect
const supertest = require('supertest')
const app = require('../app')
const api = supertest('http://localhost:3000')

// Test for ROOT path
describe('GET /', () => {
  it('should return a 200 response', (done) => {
    api.get('/api')
    .set('Accept', 'application/json')
    .expect(200, done)
  })

  it('Should return summary information about you: name, tagline etc', (done) => {
    api.get('/api')
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(err).to.be.a('null')
      expect(res.body).to.have.property('name')
      expect(res.body).to.have.property('industry')
      expect(res.body).to.have.property('currently')
      expect(res.body).to.have.property('education')
      expect(res.body).to.have.property('profile_image')
      done()
    })
  })
})

// Test for PROFILE path
describe('GET /profile', () => {
  it('should return a 200 response', (done) => {
    api.get('/api/profile')
    .set('Accept', 'application/json')
    .expect(200, done)
  })

  it('should return your profile statement', (done) => {
    api.get('/api/profile')
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(err).to.be.a('null')
      expect(res.body).to.not.be.empty
      done()
    })
  })
})

// Test for LINKS path
describe('GET /links', () => {
  it('should return a 200 response', (done) => {
    api.get('/api/links')
    .set('Accept', 'application/json')
    .expect(200, done)
  })

  it('should return an array of named links to your presence online as an array', (done) => {
    api.get('/api/links')
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(err).to.be.a('null')
      expect(res.body.links).to.be.an('array')
      expect(res.body.links).to.not.be.empty
      done()
    })
  })
})

// Test for PROJECTS path
describe('GET /projects', () => {
  it('should return a 200 response', (done) => {
    api.get('/api/projects')
    .set('Accept', 'application/json')
    .expect(200, done)
  })

  it('should return an array of the projects you have built', (done) => {
    api.get('/api/projects')
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(err).to.be.a('null')
      expect(res.body.projects).to.be.an('array')
      expect(res.body.projects).to.not.be.empty
      done()
    })
  })
})

// Test for PROJECTS/:ID path
describe('GET /projects/:id', () => {
  it('should return a 200 response', (done) => {
    api.get('/api/projects/1')
    .set('Accept', 'application/json')
    .expect(200, done)
  })

  it('should return the full details of a specific projects: name, github & heroku links, images etc', (done) => {
    api.get('/api/projects/1')
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(err).to.be.a('null')
      expect(res.body).to.have.property('title')
      expect(res.body.title).to.not.be.empty
      expect(res.body).to.have.property('description')
      expect(res.body.description).to.not.be.empty
      expect(res.body).to.have.property('links')
      expect(res.body.links).to.be.an('array')
      expect(res.body.links).to.not.be.empty
      expect(res.body).to.have.property('images')
      expect(res.body.images).to.be.an('array')
      expect(res.body.images).to.not.be.empty
      done()
    })
  })
})

// Test for SKILLS path
describe('GET /skills', () => {
  it('should return a 200 response', (done) => {
    api.get('/api/skills')
    .set('Accept', 'application/json')
    .expect(200, done)
  })

  it('should return an array of your skills/competencies each', (done) => {
    api.get('/api/skills')
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(err).to.be.a('null')
      expect(res.body.skills).to.be.an('array')
      done()
    })
  })

  it('should have properties "name" and "proficiency"', (done) => {
    api.get('/api/skills')
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(err).to.be.a('null')
      expect(res.body.skills[0]).to.have.property('name')
      expect(res.body.skills[0]).to.have.property('proficiency')
      expect(res.body.skills[0].proficiency).to.be.a('number')
      done()
    })
  })
})

// Test for EDUCATION path
describe('GET /education', () => {
  it('should return a 200 response', (done) => {
    api.get('/api/education')
    .set('Accept', 'application/json')
    .expect(200, done)
  })

  it('should return a summary list of your education history', (done) => {
    api.get('/api/education')
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(err).to.be.a('null')
      expect(res.body.education).to.be.an('array')
      expect(res.body.education).to.not.be.empty
      done()
    })
  })
})

// Test for EDUCATION/:ID path
describe('GET /education/:id', () => {
  it('should return a 200 response', (done) => {
    api.get('/api/education/1')
    .set('Accept', 'application/json')
    .expect(200, done)
  })

  it('should return information on education period', (done) => {
    api.get('/api/education/1')
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(err).to.be.a('null')
      expect(res.body).to.have.property('duration')
      expect(res.body.duration).to.not.be.empty
      done()
    })
  })

  it('should return a list of achievements', (done) => {
    api.get('/api/education/1')
    .set('Accept', 'application/json')
    .end((err, res) => {
      expect(err).to.be.a('null')
      expect(res.body).to.have.property('achievements')
      expect(res.body.achievements).to.be.an('array')
      done()
    })
  })
})
