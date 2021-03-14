const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const keys = require('./config/keys')


const morgan = require("morgan");

const app = express()

mongoose.connect(keys.mongoURI)
    .then(() => console.log("Mongo DB Connected")) // У любого промиса есть метод then
    .catch(error => console.log(error)) // тоже есть у любого промиса

app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use((morgan)('dev'))

app.use('/uploads', express.static('uploads'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

// localhost:5000/api/auth/login
app.use('/api/auth', authRoutes) // use свойство позволяющее добавлять плагины, роуты и т.д.
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)

module.exports = app