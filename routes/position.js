const express = require('express')
const passport = require('passport')
const controller = require('../controllers/position')

const router = express.Router()

// Задача чтобы эти роуты получали только авторизованные пользователи, т.е. только те у которых токен совпал

router.get('/:categoryId', passport.authenticate('jwt', {session: false}), controller.getByCategoryId)
router.post('/', passport.authenticate('jwt', {session: false}), controller.create)
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update)
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove)

module.exports = router