const {Router} = require('express');
const ProdutosController = require('../controllers/ProdutosController');

const router = Router();
const produtosController = new ProdutosController();

router.get('/produtos', produtosController.index);
router.post('/produtos', produtosController.create);
router.get('/pesquisa/:termo', produtosController.search);
router.get('/produtos/filter', produtosController.filter);


module.exports = router;