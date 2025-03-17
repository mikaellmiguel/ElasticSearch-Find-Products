import { Package } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { nome, descricao, categoria, preco, estoque } = product._source;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <Package className="h-6 w-6 text-blue-500" />
        <h3 className="text-lg font-semibold">{nome}</h3>
      </div>
      <p className="text-gray-600 mb-4">{descricao}</p>
      <div className="flex justify-between items-center text-sm">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {categoria}
        </span>
        <div className="flex gap-4">
          <span className="text-green-600">R$ {preco}</span>
          <span className="text-gray-500">Estoque: {estoque}</span>
        </div>
      </div>
    </div>
  );
}