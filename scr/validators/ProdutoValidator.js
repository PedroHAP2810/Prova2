const yup = require('yup')

const schema = yup.object().shape({
    nome: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    marca: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    gramatura: yup
    .string('campo precisa ser um texto'),
    data_de_validade: yup
        .string('Data inválida'),
    preço: yup
        .number('campo precisa ser numerico')
        .required('campo obrigatório'),

})

function validarProduto(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            console.log(err)
            const errors = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })
            res.status(400).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros: errors
                }
            )
        })
}

module.exports = {
    validarProduto
}