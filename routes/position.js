const express = require('express')
const controller = require('../controllers/position')

const router = express.Router()

// Задача чтобы эти роуты получали только авторизованные пользователи, т.е. только те у которых токен совпал

router.get('/:categoryId', controller.getByCategoryId)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router