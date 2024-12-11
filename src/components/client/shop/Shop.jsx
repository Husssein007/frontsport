import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await axios.get("http://localhost:4000/product/products");
      console.log('product',res.data)
      if (res) {
         setProducts(res.data);
      }
    }
    fetchProducts();
  }, []);
  console.log('product shop component', products)

  return (
    <section className="min-h-screen bg-white" style={{marginTop:"40px"}}>
      <div className="text-center pt-8 sm:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
          >
            <img
              className="w-full h-48 object-cover rounded-md mb-2"
              src={product.imageUrl}
              alt={product.name}
            />
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h2>
            <p className="text-gray-500 mb-2">{product.price}</p>
            {/* On click, navigate to Product page */}
            <Link
              to="/product"
              state={product} // Pass product details via `state`
              className="inline-flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-200"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
