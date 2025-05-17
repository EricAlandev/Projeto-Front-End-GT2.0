import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  console.log('Produto no ProductCard:', product);

  return (
    <Link to={`/product/${String(product.id)}`} className="block group">
      <div className="rounded-xl p-4 hover:shadow-lg transition bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-84 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className={product.priceDiscount ? "text-[#8F8F8F]" : "text-[#1F1F1F] font-bold"}>
          {product.priceDiscount ? (
            <>
              <span className="line-through mr-2">R$ {product.price.toFixed(2)}</span>
              <span className="text-[#1F1F1F] font-bold">R$ {product.priceDiscount.toFixed(2)}</span>
            </>
          ) : (
            <>R$ {product.price.toFixed(2)}</>
          )}
         </p>
      </div>
    </Link>
  );
}
