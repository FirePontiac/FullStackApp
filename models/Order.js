const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    order: {
        type: Number,
        required: true
    },
    list: [ // Так храним эти сущьности, из-за бизнес логики
        {
        name: {type: String},
            quantity: {type: Number}, // Количество
            cost: {type: Number}
    }
    ],
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('orders', orderSchema)
