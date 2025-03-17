import React, { useState } from 'react';
import { ProductInput } from '../types/Product';
import { createProduct } from '../services/api';
import toast from 'react-hot-toast';

export function ProductForm() {
  const [product, setProduct] = useState<ProductInput>({
    nome: '',
    descricao: '',
    categoria: '',
    preco: 0,
    estoque: 0
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form fields
    if (product.nome == '' || product.descricao == '' || product.categoria == '' || product.preco <= 0 || product.estoque <= 0) {
      toast.error('Preencha todos os campos corretamente.');
      return;
    }
    
    try {
      await createProduct(product);
      toast.success('Produto criado com sucesso!');
      setProduct({ nome: '', descricao: '', categoria: '', preco: 0, estoque: 0 });
    } catch (error) {
      toast.error('Erro ao criar produto. Verifique os campos e tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Adicionar Produto</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            value={product.nome}
            onChange={(e) => setProduct({ ...product, nome: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Descrição</label>
          <textarea
            value={product.descricao}
            onChange={(e) => setProduct({ ...product, descricao: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Categoria</label>
          <input
            type="text"
            value={product.categoria}
            onChange={(e) => setProduct({ ...product, categoria: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Preço</label>
            <input
              type="number"
              value={product.preco}
              onChange={(e) => setProduct({ ...product, preco: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="0"
              step="0.01"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Estoque</label>
            <input
              type="number"
              value={product.estoque}
              onChange={(e) => setProduct({ ...product, estoque: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="0"
              required
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Criar Produto
      </button>
    </form>
  );
}