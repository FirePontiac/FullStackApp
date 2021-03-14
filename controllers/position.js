const Position = require('../models/Position')
const errorHandler = require('../utils/errorHandler')

module.exports.getByCategoryId = async function(req,res) {
    try {
        const positions = await Position.find({
            category: req.params.categoryId,
            user: req.user.id // Берётся из middleware поле user и там же его id
        })
        res.status(200).json(positions)
    } catch(e) {
        errorHandler(res, e)
    }
}
module.exports.create = async function(req,res) {
    try {
        // тут создать новую позицию по определённым параметрам, если все good отправить данные с помощью
        // которых сохранили новую модель
        const position = await new Position({
            name: req.body.name,
            cost: req.body.cost,
            category: req.body.category,
            // Но тут не будет Id того пользователя который создаёт данную позицию
            user: req.user.id // Поле Id потребуется для Frontend
        }).save()
        res.status(201).json(position)
    } catch(e) {
        errorHandler(res, e)
    }
}
module.exports.remove = async function(req,res) {
    try {
        await Position.remove({_id: req.params.id})
        req.status(200).json({
            message: 'Позиция была удалена'
        })
    } catch(e) {
        errorHandler(res, e)
    }
}
module.exports.update = async function(req,res) {
    try {
        const position = await Position.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body}, // Тут данные ккоторые позволят изменить значение определённой записи
            {new: true} // Обновит определённую запись в mongoose и только потом её вернёт, если это не добавить,
                // то получим запись без изменений
            )
        res.status(200).json(position)
    } catch(e) {
        errorHandler(res, e)
    }
}