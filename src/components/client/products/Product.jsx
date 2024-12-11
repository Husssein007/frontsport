import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Product() {
  const location = useLocation();
  const product = location.state; // Read product data passed from the Shop.jsx page
console.log('producct composant product', product)
  return (
    <section className="min-h-screen bg-white relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://i.pinimg.com/originals/47/5a/bb/475abb3d2f4323dc3f018b7547f6c273.jpg"
          alt="Background"
          className="w-full h-full object-cover filter blur-sm"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 pt-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start md:justify-between">
          {/* Product Image */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              className="w-full h-auto object-cover rounded-md mb-2"
              src={product.
                imageUrl}
              alt={product.name}
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 md:pl-6 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
            <div className="text-lg font-semibold text-gray-900 mb-4">${product.price}</div>

            <div className="flex justify-center md:justify-start gap-3">
              <button
                className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Add to Cart
              </button>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-gray-600 rounded-md hover:bg-gray-700 transition duration-200"
              >
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
