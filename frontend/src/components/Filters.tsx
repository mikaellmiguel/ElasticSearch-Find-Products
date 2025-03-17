import React from 'react';

interface FiltersProps {
  onFilterChange: (filters: Record<string, string | number>) => void;
}

export function Filters({ onFilterChange }: FiltersProps) {
  const [filters, setFilters] = React.useState({
    categoria: '',
    minPreco: '',
    maxPreco: '',
    minEstoque: '',
    maxEstoque: ''
  });

  const handleChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    // Remove empty filters before sending
    const activeFilters = Object.entries(newFilters)
      .reduce((acc, [key, value]) => {
        if (value !== '') {
          acc[key] = value;
        }
        return acc;
      }, {} as Record<string, string>);
    
    onFilterChange(activeFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Filtros</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Categoria</label>
          <input
            type="text"
            value={filters.categoria}
            onChange={(e) => handleChange('categoria', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Filtrar por categoria"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Preço Mínimo</label>
            <input
              type="number"
              value={filters.minPreco}
              onChange={(e) => handleChange('minPreco', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Preço Máximo</label>
            <input
              type="number"
              value={filters.maxPreco}
              onChange={(e) => handleChange('maxPreco', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="0"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Estoque Mínimo</label>
            <input
              type="number"
              value={filters.minEstoque}
              onChange={(e) => handleChange('minEstoque', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Estoque Máximo</label>
            <input
              type="number"
              value={filters.maxEstoque}
              onChange={(e) => handleChange('maxEstoque', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}