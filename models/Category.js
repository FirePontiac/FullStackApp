const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true // Указание обязательного поля, если не будет, ошибка
    },
    imageSrc: {
        type: String,
        default: ''
    },
    user: {
        // Тут будет ссылка на id определённого пользователя
        ref: 'users', // название коллекции
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('categories', categorySchema)
