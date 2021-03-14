// Сперва подключим модель пользователя
const bcrypt = require('bcryptjs')

const User = require('../models/User') // В переменной User находится модель которая взаимодействует с базой данных,
    // сохраняет что то в неё или забирает

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
module.exports.register = async function (req, res) {
    //res.status(200).json({
      //  register: 'from controller'
    // })
    // email password, отправляем на сервер, если такие данные уже есть в дазе данных
    // Если есть такие данные то значит пользователь не может зарегистрироваться в системе, т.к. такой уже есть
    // Соответственное выкидываем ошибку, если такого аккаунта не найдено, в таком случае создаём специальный защищённый
    // Пароль, т.к. не будем пароль хранить в открытом виде в базе данных
    // После генерации защиты для пароля, создаём нового пользователя, сохраняем его и сообщаем человеку что всё
    // прошло успешно, теперь он может залогиниться пользуясь своими данными
    /* const user = new User({ // Тестовый вариант пользователя
        email: req.body.email, // Тут забираем
        password: req.body.password
    })
        // user.save() // Сохраняем переменную
    user.save().then(() => console.log('User Created')) // Пользователя в Базу добавили через Postman */
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        // При условии существования пользоателя
        res.status(409).json({ // передали ошибку, ошибки описаны на сайте https://httpstatuses.com/409
            message: 'Такой email уже занят. Попробуйте другой.'
        })

    } else {
        // Не существует,  необходимо создать пользователя
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password

        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt) // Так асинхронно передаём шифрованный пароль
        })
        try {
            await user.save()

            res.status(201).json(user) // Обратно вернули обьект user пользователю
        } catch(e) {
            // Обработать ошибку

        }


    }
}