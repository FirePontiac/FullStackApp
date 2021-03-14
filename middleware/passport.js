// Тут будем описывать параметры для работы с json web token
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const keys = require('../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model('users')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Паспорт JS сообщаем что будем забирать токен
    // хранящийся в Хедерах
    secretOrKey: keys.jwt // Тут передаёем значение секретного ключа для токена
}
module.exports = passport => {
    passport.use( // Необходимо выполнить сверку со значениями в базе данных, для этого создаём новую стратегию
        // Для этого сверху подключили mongoose и вытащили пользователя из модели
        new JwtStrategy(options, async (payload, done) => { // В payload хранится ID пользователя
            // Далее у пользователя интересуемся только его email и Id методом select
            try {
                const user = await User.findById(payload.userId).select('email id')

                if (user) {
                    done(null, user)
                } else {
                    done(null, false)
                }
            }
            catch (e) {
                console.log(e, 'Бага 1')
            }
        })
    )
}