require('dotenv').config();
const path = require('path');
const cliente = require('../database/connection');


// Deletar indice caso exista de produtos
async function deleteIndexProduto() {
    try {
        const indexExists = await cliente.indices.exists({ index: 'produtos' });

        if (indexExists) {
            console.log('Índice "produtos" encontrado. Deletando índice...');

            const response = await cliente.indices.delete({
                index: 'produtos'
            });

            console.log('Índice "produtos" deletado com sucesso:');
        } else {
            console.log('Índice "produtos" não existe.');
        }
    } catch (err) {
        console.error('Erro ao deletar índice:', err);
    }
}

deleteIndexProduto();