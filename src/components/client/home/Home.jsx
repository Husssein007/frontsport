import React, { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Whey Protein",
      image: "https://i.pinimg.com/736x/05/f7/05/05f7052c3bdc88b728fbc6c132f5ac7f.jpg",
      description: "High-quality whey protein for muscle recovery and growth.",
    },
    {
      id: 2,
      name: "Creatine Monohydrate",
      image: "https://i.pinimg.com/736x/7e/23/9d/7e239dbb65e2ecc60a69e0fa6643f2bf.jpg",
      description: "Boosts energy, strength, and muscle mass.",
    },
    {
      id: 3,
      name: "BCAAs",
      image: "https://i.pinimg.com/736x/ce/69/8b/ce698b1da105be1f8b5a96d47d6fef46.jpg",
      description: "Essential amino acids to support muscle recovery and reduce fatigue.",
    },
  ];

  // Handle product click
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Close the product details
  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen relative">
      {/* Slightly Blurred Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/61/28/fe/6128fe3bba793e62e637581e3b0bd4a8.jpg"
          alt="Background"
          className="w-full h-full object-cover filter blur-[2px]"
          style={{ marginTop: "64px" }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 min-h-screen bg-white bg-opacity-80 py-12 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-7xl w-full px-4 text-center lg:text-left">
          {/* Heading Section */}
          <p className="text-lg font-semibold text-gray-700 mb-4">
            Use “FIT40” coupon to get 40% flat discount
          </p>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 mb-12 leading-tight">
            WELCOME TO MUSCLE NUTRITION.
          </h1>

          {/* Best Products Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
  key={product.id}
  className="bg-transparent border border-purple-200 p-4 rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 relative"
  onClick={() => handleProductClick(product)}
>
  {/* Ribbon for Top Seller */}
  <div className="absolute top-4 left-4 bg-yellow-400 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
    Top Seller
  </div>

  {/* Product Image */}
  <div
    className="relative w-full h-48 mb-4 overflow-hidden rounded-lg shadow-md"
    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover transition-all duration-300 transform hover:scale-110 rounded-lg"
    />
  </div>

  {/* Product Info */}
  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
  <p className="text-gray-700 mt-2 text-sm">{product.description}</p>

  {/* Ratings and Action */}
  <div className="flex items-center justify-between mt-4">
    {/* Ratings */}
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-yellow-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927C9.327 2.1 10.673 2.1 10.951 2.927l1.286 3.956a1 1 0 00.949.691h4.01c.916 0 1.302 1.176.588 1.706l-3.262 2.344a1 1 0 00-.364 1.118l1.287 3.956c.278.826-.695 1.51-1.41.999L10 13.347l-3.963 2.844c-.715.51-1.688-.173-1.41-.999l1.287-3.956a1 1 0 00-.364-1.118L2.288 8.58c-.714-.53-.328-1.706.588-1.706h4.01a1 1 0 00.949-.691l1.286-3.956z" />
      </svg>
      <span className="ml-1 text-gray-600 text-sm">4.9</span>
    </div>

    {/* Add to Cart Button */}
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all duration-300"
      onClick={() => alert(`Added ${product.name} to cart!`)}
    >
      Add to Cart
    </button>
  </div>
</div>

            ))}
          </div>

          {/* Product Modal (if product is selected) */}
          {selectedProduct && (
            <div
              className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center z-20 transition-all duration-300 opacity-100"
              onClick={handleClose}
            >
              <div
                className="bg-white p-8 rounded-lg max-w-md w-full transition-all duration-500 transform scale-105 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-3xl font-semibold mb-4 text-gray-900">{selectedProduct.name}</h2>
                <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                    style={{ width: "192px", marginLeft: "24%" }}
                  />
                </div>
                <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
                <div className="flex justify-center mt-4">
                  <button
                    className="px-8 py-2 bg-gray-900 text-white text-lg font-semibold rounded-md hover:bg-gray-700 focus:outline-none"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
