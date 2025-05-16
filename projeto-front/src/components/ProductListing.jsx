import React from "react";
import ProductCard from "./ProductCard";

export default function ProductListing({ products }) {
  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500">Nenhum produto encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}