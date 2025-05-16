import React, { useState } from 'react';

const ProductGallery = ({ images = [], width = '100%', height = '500px', radius = '8px' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="product-gallery" style={{ width }}>
      {/* Imagem principal */}
      <div className="main-image-container" style={{ 
        height, 
        borderRadius: radius,
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '16px'
      }}>
        <img
          src={images[currentIndex]?.src}
          alt={`Visualização do produto ${currentIndex + 1}`}
          className="main-image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: radius
          }}
        />
      </div>

      {/* Miniaturas */}
      <div className="thumbnails" style={{ 
        display: 'flex',
        gap: '8px',
        justifyContent: 'center'
      }}>
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '4px',
              overflow: 'hidden',
              border: index === currentIndex ? '2px solid #C92071' : '1px solid #ddd',
              padding: 0,
              cursor: 'pointer',
              background: 'none'
            }}
          >
            <img
              src={img.src}
              alt={`Miniatura ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;