const createIndexProduto = require('./createIndexProduto');
const insertProdutos = require('./insertProdutos');

async function inicializarBD() {
    await createIndexProduto();
    await insertProdutos();
}

module.exports = inicializarBD;