const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        cliente: {
            type: String,
            required: true
        },
        produtos: {
            type: String,
            required: true
        },
        dataInicio: {
            type: String,
            required: false
        },
        valorTotal: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const pedido = mongoose.model('pedido', schema)

module.exports = pedido