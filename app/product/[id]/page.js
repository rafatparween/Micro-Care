


"use client";

import { useParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { printerProducts } from "@/app/data/printerProducts";

export default function ProductDetail() {
  const params = useParams();
  const { id } = params || {};
  const { cart, addToCart } = useCart() || {};

  // find the product by id using string comparison to be resilient to types
  const product = printerProducts.find((p) => String(p.id) === String(id));

  if (!product) return <div className="mt-20 text-center">Product not found</div>;

  const isInCart = Array.isArray(cart) && cart.some((item) => String(item.id) === String(product.id));

  return (
    <div className="mt-20 max-w-5xl mx-auto flex flex-col md:flex-row gap-10 p-10">
      
      {/* Product Image */}
      <div className="w-full md:w-1/2">
        {/* Use a plain img tag to avoid Next/Image issues with dynamic URLs or missing config */}
        <img
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        {/* Description */}
        <p className="text-gray-700">{product.description}</p>

        {/* Features */}
        <h2 className="text-xl font-semibold mt-2">Key Features:</h2>
        <ul className="list-disc list-inside">
          {(product.features || []).map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {/* Price */}
        <div className="flex items-center gap-4 mt-2">
          <p className="text-2xl font-bold text-orange-500">
            ${product.discountPrice ?? product.price}
          </p>
          {product.discountPrice && (
            <p className="line-through text-gray-400">${product.price}</p>
          )}
        </div>

        {/* Rating and Stock */}
        <p>Rating: {product.rating ?? "N/A"} ⭐</p>
        <p>Stock: {product.stock ?? "N/A"} units</p>

        {/* Add to Cart Button */}
        <button
          className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-xl shadow-lg w-48 mt-4"
          onClick={() =>
            isInCart
              ? alert("Already in cart")
              : addToCart
              ? addToCart(product)
              : alert("Cart not available")
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
