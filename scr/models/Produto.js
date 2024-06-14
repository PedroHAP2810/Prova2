const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        marca: {
            type: String,
            required: true
        },
        dataValidade: {
            type: String,
            required: true
        },
        gramatura: {
            type: String,
            required: false
        },
        preço: {
            type: Number,
            required:true
        }
    },
    {
        timestamps: true
    }
)

const Produto = mongoose.model('produto', schema)

module.exports = Produto