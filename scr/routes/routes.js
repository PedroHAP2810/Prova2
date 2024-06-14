const express = require('express')
const router = express.Router()


const CargoController = require('../controllers/CargoController')
const ClienteController = require('../controllers/ClienteController')
const FuncionarioController = require('../controllers/FuncionarioController')
const PedidoController = require('../controllers/PedidoController')
const ProdutoController = require('../controllers/ProdutoController')

const { validarID } = require('../validators/IdValidator')
const { validarCargo } = require('../validators/CargoValidator')
const { validarCliente } = require('../validators/ClienteValidator')
const { validarFuncionario } = require('../validators/FuncionarioValidator')
const { validarPedido } = require('../validators/PedidoValidator')
const { validarProduto } = require('../validators/ProdutoValidator')

router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id', validarID, CargoController.buscarPorID)
router.post('/cargos', validarCargo, CargoController.criar)
router.put('/cargos/:id', validarID, validarCargo, CargoController.atualizar)
router.delete('/cargos/:id', validarID, CargoController.excluir)

router.get('/clientes', ClienteController.buscarTodos)
router.get('/clientes/:id', validarID, ClienteController.buscarPorID)
router.post('/clientes', validarCliente, ClienteController.criar)
router.put('/clientes/:id', validarID, validarCliente, ClienteController.atualizar)
router.delete('/clientes/:id', validarID, ClienteController.excluir)

router.get('/funcionarios', FuncionarioController.buscarTodos)
router.get('/funcionarios/:id', validarID, FuncionarioController.buscarPorID)
router.post('/funcionarios', validarFuncionario, FuncionarioController.criar)
router.put('/funcionarios/:id', validarID, validarFuncionario, FuncionarioController.atualizar)
router.delete('/funcionarios/:id', validarID, FuncionarioController.excluir)

router.post('/pedidos', validarPedido, PedidoController.criar)
router.get('/pedidos', PedidoController.buscarTodos)
router.get('/pedidos/:id', validarID, PedidoController.buscarPorID)
router.put('/pedidos/:id', validarID, validarPedido, PedidoController.atualizar)
router.delete('/pedidos/:id', validarID, PedidoController.excluir)

router.post('/produtos', validarProduto, ProdutoController.criar)
router.get('/produtos', ProdutoController.buscarTodos)
router.get('/produtos/:id', validarID, ProdutoController.buscarPorID)
router.put('/produtos/:id', validarID, validarProduto, ProdutoController.atualizar)
router.delete('/produtos/:id', validarID, ProdutoController.excluir)

module.exports = router 
