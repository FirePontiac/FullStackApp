const express = require('express')
const controller = require('../controllers/auth')

const router = express.Router() // Создали локальный роутер, Router - эта константа это конструктор
// localhost:5000/api/auth/login
router.post('/login', controller.login // без CallBack функции, не вызывая, она будет вызвана только в том случае,
        // Если попадём на // localhost:5000/api/auth/login
    // res.status(200).json({ // Методом json передаём данные
    //     login: true // Это для теста
    // })
)
// localhost:5000/api/auth/register
router.post('/register', controller.register)

module.exports = router