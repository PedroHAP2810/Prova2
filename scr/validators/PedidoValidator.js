const yup = require('yup')

const schema = yup.object().shape({
    cliente: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    produtos: yup
        .string('campo precisa ser um texto')
        .required('campo obrigatório'),
    valorTotal: yup
        .string('campo precisa ser numerico')
        .required('campo obrigatório'),

})

function validarPedido(req, res, next) {
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
    validarPedido
}