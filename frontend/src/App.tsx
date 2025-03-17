import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { SearchBar } from './components/SearchBar';
import { ProductCard } from './components/ProductCard';
import { ProductForm } from './components/ProductForm';
import { Filters } from './components/Filters';
import { Product } from './types/Product';
import { getProducts, searchProducts, filterProducts } from './services/api';
import { PlusCircle } from 'lucide-react';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchTerm) {
        handleSearch();
      } else {
        loadProducts();
      }
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm]);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await searchProducts(searchTerm);
      setProducts(response.data);
    } catch (error) {
      console.error('Error searching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async (filters: Record<string, string | number>) => {
    try {
      setLoading(true);
      const response = await filterProducts(filters);
      setProducts(response.data);
    } catch (error) {
      console.error('Error filtering products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Buscador de Produtos</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <PlusCircle className="h-5 w-5" />
            {showForm ? 'Fechar Formulário' : 'Adicionar Produto'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Filters onFilterChange={handleFilter} />
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6">
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>

            {showForm && (
              <div className="mb-8">
                <ProductForm />
              </div>
            )}

            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[60vh] overflow-auto">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
                {products.length === 0 && (
                  <div className="col-span-2 text-center py-8 text-gray-500">
                    Nenhum produto encontrado.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;