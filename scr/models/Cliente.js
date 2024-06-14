const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        },
        rg: {
            type: String,
            required: true
        }
    },
    { timestamps: true })

const Cliente = mongoose.model('cliente', schema)

module.exports = Cliente