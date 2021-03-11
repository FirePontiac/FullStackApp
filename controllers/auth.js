// Тут будут функции которые мы будем экспортировать в зависимости от Роута
module.exports.login = function (req, res) {
    res.status(200).json({ // Методом json передаём данные
        // Было login: true // Это для теста
        login: { // Пользовательские данные
            email: req.body.email,
            password: req.body.password
        }
    })
}
// Далее напишем все необходимые модули для регистрации
module.exports.register = function (req, res) {
    res.status(200).json({
        register: 'from controller'
    })
}