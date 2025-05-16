import React, { useState } from 'react';

const BuyBox = ({
  name = "Nome do Produto",
  stars = 0,
  rating = 0,
  price = 0,
  priceDiscount = null,
  description = "Descrição não disponível",
  sizes = [],
  colors = [],
  reference = "N/A"
}) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Funções de formatação
  const formatRating = (num) => num?.toFixed?.(1) || '0.0';
  const formatPrice = (num) => {
    return num?.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    }) || 'R$ 0,00';
  };

  return (
    <div className="product-details" style={{ maxWidth: '500px', marginLeft: '50px' }}>
      {/* Cabeçalho */}
      <h1 className="product-name" style={{ fontSize: '32px', color: '#1F1F1F', marginBottom: '10px' }}>
        {name}
      </h1>
      
      <p className="product-reference" style={{ fontSize: '12px', color: '#8F8F8F', marginBottom: '20px' }}>
        Ref: {reference}
      </p>

      {/* Avaliação */}
      <div className="rating-container" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div className="stars-box" style={{
          backgroundColor: '#000',
          borderRadius: '4px',
          padding: '2px 12px',
          display: 'flex',
          alignItems: 'center',
          marginRight: '10px'
        }}>
          <span className="stars-value" style={{ fontSize: '14px', color: 'white' }}>
            {formatRating(stars)}
          </span>
          <img 
            src="/assets/Stars.png" 
            alt="Avaliação" 
            className="stars-image"
            style={{ width: '55px', height: '44px', marginLeft: '5px' }} 
          />
        </div>
        <span className="rating-count" style={{ fontSize: '14px', color: '#CCCCCC' }}>
          {rating} avaliações
        </span>
      </div>

      {/* Preço */}
      <div className="price-container" style={{ marginBottom: '20px' }}>
        {priceDiscount ? (
          <div className="discounted-price" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="original-price" style={{
              fontSize: '16px',
              color: '#CCCCCC',
              textDecoration: 'line-through'
            }}>
              {formatPrice(price)}
            </span>
            <span className="current-price" style={{
              fontSize: '32px',
              color: '#1F1F1F',
              fontWeight: 'bold'
            }}>
              {formatPrice(priceDiscount)}
            </span>
            <span className="discount-badge" style={{
              backgroundColor: '#C92071',
              color: 'white',
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '14px'
            }}>
              {Math.round((1 - priceDiscount/price) * 100)}% OFF
            </span>
          </div>
        ) : (
          <span className="normal-price" style={{ fontSize: '32px', color: '#1F1F1F' }}>
            {formatPrice(price)}
          </span>
        )}
      </div>

      {/* Descrição */}
      <p className="product-description" style={{ fontSize: '14px', color: '#474747', marginBottom: '20px' }}>
        {description}
      </p>

      {/* Seletor de Tamanhos */}
      <div className="size-selector" style={{ marginBottom: '20px' }}>
        <h3 className="selector-title" style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>Tamanho</h3>
        <div className="size-options" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`size-option ${selectedSize === size ? 'selected' : ''}`}
              style={{
                padding: '8px 12px',
                border: selectedSize === size ? '2px solid #C92071' : '1px solid #ddd',
                borderRadius: '6px',
                background: selectedSize === size ? '#F8F8F8' : 'white',
                cursor: 'pointer',
                minWidth: '40px',
                transition: 'all 0.2s ease'
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Seletor de Cores */}
      <div className="color-selector" style={{ marginBottom: '30px' }}>
        <h3 className="selector-title" style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>Cor</h3>
        <div className="color-options" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {colors.map(color => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`color-option ${selectedColor === color ? 'selected' : ''}`}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: color,
                border: selectedColor === color ? '2px solid #C92071' : '1px solid #ddd',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Botão de Comprar */}
      <button className="buy-button" style={{
        backgroundColor: '#FFC600',
        color: 'white',
        fontSize: '16px',
        padding: '15px 30px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        width: '100%',
        marginTop: '30px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease'
      }}>
        COMPRAR
      </button>
    </div>
  );
};

export default BuyBox;