const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = require('./config/routes')

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

app.use('/api/', router)

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: err
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

module.exports = app
