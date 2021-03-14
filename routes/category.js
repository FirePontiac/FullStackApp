const express = require('express')
const controller = require('../controllers/category')
const passport = require('passport')
const router = express.Router()

// Задача чтобы эти роуты получали только авторизованные пользователи, т.е. только те у которых токен совпал

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:id', controller.getById) // :id - указали express что ожидаем параметр id
router.delete('/:id', controller.remove)
router.post('/', controller.create)
router.patch('/:id', controller.update)

module.exports = router