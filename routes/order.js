const express = require('express')
const controller = require('../controllers/order')

const router = express.Router()

// Задача чтобы эти роуты получали только авторизованные пользователи, т.е. только те у которых токен совпал

router.get('/', controller.getAll)
router.post('/', controller.create)

module.exports = router