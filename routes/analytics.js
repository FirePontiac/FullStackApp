const express = require('express')
const controller = require('../controllers/analytics')

const router = express.Router()
// Задача чтобы эти роуты получали только авторизованные пользователи, т.е. только те у которых токен совпал

router.get('/overview', controller.overview)

router.get('/analytics', controller.analytics)

module.exports = router