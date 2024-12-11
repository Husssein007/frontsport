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
                className="bg-transparent p-4 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
               
              

                onClick={() => handleProductClick(product)}
              >
                <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg" style={{    display: "flex",alignItems: "center",justifyContent: "center"}}>
                  {/* Improved product image styling */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 rounded-lg" style={{    display: "flex",alignItems: "center",justifyContent: "center",    width: "111px"
}}></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-300 transform hover:scale-110 rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
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
                    style={{width:"192px",marginLeft:"24%"}}
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
