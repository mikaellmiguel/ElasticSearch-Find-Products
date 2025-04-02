const cliente = require('./connection');

async function createIndexProduto() {
    try {
      const indexExists = await cliente.indices.exists({ index: 'produtos' });
  
      if (!indexExists) {
        console.log('Índice "produtos" não encontrado. Criando índice...');
        
        const response = await cliente.indices.create({
          index: 'produtos',
          body: {
            settings: {
              analysis: {
                analyzer: {
                  meu_analisador: {
                    type: 'standard',
                    stopwords: ['e', 'ou', 'de', 'da', 'do', 'em', 'um', 'uma', 'para'],
                  },
                },
              },
            },
            mappings: {
              properties: {
                nome: { type: 'text', analyzer: 'meu_analisador' },
                descricao: { type: 'text', analyzer: 'meu_analisador' },
                categoria: { type: 'keyword' },
                preco: { type: 'float' },
                estoque: { type: 'integer' },
              },
            },
          },
        });
  
        console.log('Índice "produtos" criado com sucesso:', response);
      } else {
        console.log('Índice "produtos" já existe.');
      }
    } 
    catch (err) {
      console.error('Erro ao criar índice:', err);
    }
}
  
module.exports = createIndexProduto;