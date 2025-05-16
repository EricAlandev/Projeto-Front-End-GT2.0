import React, { useState } from 'react';
import Section from '../Section';
import ProductListing from '../ProductListing';
import Products from '../products/ListProducts'; // Importe o array completo de produtos

const ProductListingPage = () => {
  // Transforme os produtos completos para incluir os campos de filtro mantendo os IDs
  const allProducts = Products.map(product => ({
    id: product.id, // Mantém o ID original
    name: product.name,
    image: product.image,
    price: product.price,
    priceDiscount: product.priceDiscount,
    size: product.sizes[0], // Pega o primeiro tamanho disponível
    color: getColorName(product.colors[0]), // Converte código de cor para nome
    category: getCategory(product.name) // Determina a categoria
  }));

  // Função auxiliar para converter código de cor para nome
  function getColorName(colorCode) {
    const colorMap = {
      '#ffffff': 'Branco',
      '#000000': 'Preto',
      '#ff0000': 'Vermelho',
      '#800080': 'Roxo',
      '#333333': 'Preto',
      '#444444': 'Preto',
      '#555555': 'Preto'
    };
    return colorMap[colorCode] || 'Outro';
  }

  // Função auxiliar para determinar categoria
  function getCategory(name) {
    if (name.includes('Moletom')) return 'Moletom';
    if (name.includes('Conjunto') || name.includes('&')) return 'Conjunto';
    return 'Camisa';
  }

  const [filters, setFilters] = useState({
    size: [],
    color: [],
    category: []
  });

  const [sortOrder, setSortOrder] = useState('');

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters(prev => {
      const values = new Set(prev[name]);
      checked ? values.add(value) : values.delete(value);
      return { ...prev, [name]: Array.from(values) };
    });
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredProducts = allProducts
    .filter(product => {
      const { size, color, category } = filters;
      return (
        (size.length === 0 || size.includes(product.size)) &&
        (color.length === 0 || color.includes(product.color)) &&
        (category.length === 0 || category.includes(product.category))
      );
    })
    .sort((a, b) => {
      const priceA = a.priceDiscount ?? a.price;
      const priceB = b.priceDiscount ?? b.price;

      if (sortOrder === 'asc') return priceA - priceB;
      if (sortOrder === 'desc') return priceB - priceA;
      return 0;
    });

  return (
    <div className="flex gap-8 px-8 py-6">
      {/* ... (o restante do seu código permanece igual) ... */}
      <div className="flex-1">
        <Section
          title={`${filteredProducts.length} produtos encontrados`}
          titleAlign="left"
        />
        <ProductListing products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductListingPage;