const cliente = require('../database/connection');

class ProductController {
  async index(request, response) {
    // mostrar todos os produtos
    try {
      const data = await cliente.search({
        index: 'produtos',
        body: {
          query: {
            match_all: {},
          },
        },
        size: 100,
      });

      return response.json(data.hits.hits);

    } catch (error) {
      console.error(error);
      return response.status(500).json('Erro ao buscar produtos');
    }
  }

  async create(request, response) {
    // criar um novo produto
    const { nome, descricao, categoria, preco, estoque } = request.body;

    try {
      await cliente.index({
        index: 'produtos',
        body: {
          nome,
          descricao,
          categoria,
          preco,
          estoque,
        },
      });
    } catch (error) {
      console.error(error);
      return response.status(500).json('Erro ao criar produto');
    }

    return response.status(201).json();
  }

  async search(request, response) {
    // ele pode pesquisar pelo nome ou pelo descrição
    const { termo } = request.params;

    try {
      const data = await cliente.search({
        index: 'produtos',
        body: {
          query: {
            multi_match: {
              query: termo,
              fields: ['nome', 'descricao'],
              fuzziness: 'AUTO', // permite que a busca seja mais flexível
              operator: 'and' // busca por todos os termos
            },
          },
        },
        size: 100,
      });

      return response.json(data.hits.hits);

    } catch (error) {
      console.error(error);
      return response.status(500).json('Erro ao buscar produtos');
    }

  }
    
  async filter(request, response) {
    const { categoria, descricao, minPreco, maxPreco, minEstoque, maxEstoque } = request.query;
    
    let mustQueries = [];
    
    if (categoria) {
      mustQueries.push({ match: { categoria } });
    }

    if(descricao) {
      mustQueries.push({ match: { descricao } });
    }
    
    if (minPreco || maxPreco) {
      mustQueries.push({
        range: {
          preco: {
            gte: minPreco || undefined,
            lte: maxPreco || undefined,
          },
        },
      });
    }
    
    if (minEstoque || maxEstoque) {
      mustQueries.push({
        range: {
          estoque: {
            gte: minEstoque || undefined,
            lte: maxEstoque || undefined,
          },
        },
      });
    }
    
    try {
      const data = await cliente.search({
        index: 'produtos',
        body: {
          query: {
            bool: {
              must: mustQueries,
            },
          },
        },
        size: 100,
      });
    
      return response.json(data.hits.hits);
    } catch (error) {
      console.error(error);
      return response.status(500).json('Erro ao filtrar produtos');
    }
  }
    
};

module.exports = ProductController;