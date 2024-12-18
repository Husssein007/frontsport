import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterByPrice, setFilterByPrice] = useState({ min: 0, max: Infinity });
  const [showFilter, setShowFilter] = useState(false); // State to control visibility of filter

  useEffect(() => {
    async function fetchProducts() {
      const res = await axios.get("http://localhost:4000/product/products");
      if (res) {
        setProducts(res.data);
        setFilteredProducts(res.data); // Set initial filtered products
      }
    }
    fetchProducts();
  }, []);

  // Search function
  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Filter by price function
  const handlePriceFilter = () => {
    const filtered = products.filter(
      (product) =>
        product.price >= filterByPrice.min && product.price <= filterByPrice.max
    );
    setFilteredProducts(filtered);
  };

  return (
    <section
      className="min-h-screen bg-gray-100"
      style={{ marginTop: "40px", fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Header */}
      <div
        className="text-center pt-12 sm:pt-16 rounded-lg shadow-lg p-8 mb-8"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20230412/original/pngtree-bodybuilder-posing-handsome-power-athletic-guy-male-fitness-muscular-body-on-picture-image_2409169.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative", // Ensure the overlay sits on top of the image
        }}
      >
        <div
          style={{
            position: "absolute", // Position the overlay over the image
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white overlay
            zIndex: 1, // Ensure the overlay sits above the image
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 2 }}>
        <h1 className="text-5xl font-extrabold text-white mb-6 uppercase tracking-wider leading-tight text-shadow-md">
  Power Up Your Fitness!
</h1>


<p className="text-white text-lg max-w-2xl mx-auto leading-relaxed font-bold">
  Achieve your goals with our top-quality gym gear, supplements, and nutrition products.
  Fuel your body, elevate your performance, and stay unstoppable!
</p>
</div>
<div className="mt-6">
  <h2 className="text-center text-3xl font-extrabold text-white uppercase tracking-wide mb-4">
    Elevate Your Performance with Top-Quality Gym Products!
  </h2>
  <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed font-bold">
    Discover the best gear, supplements, and nutrition to power up your fitness journey. Stay strong and unstoppable!
  </p>
</div>
<p className="text-white text-lg max-w-2xl mx-auto leading-relaxed font-bold">
Our mission is to provide you with the tools and resources to buld your body for whatever health and wellness goal you set your site on. From programs and articles to supplements and gear, every part of your routine starts here.
</p>

      </div>

     {/* Button to Show/Hide Filter */}
<div className="text-center mb-6">
  <button
    onClick={() => setShowFilter(!showFilter)}
    className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300"
  >
    {showFilter ? "Hide Filter" : "Show Filter"}
  </button>
</div>

{/* Search and Filter Section */}
{showFilter && (
  <div className="p-6 flex flex-col lg:flex-row items-center justify-center gap-6 bg-black text-black rounded-xl shadow-lg">
    {/* Search Bar */}
    <div className="relative w-full lg:w-1/3">
    <div className="relative w-full lg:w-1/3">
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    onKeyUp={(e) => e.key === "Enter" && handleSearch()}
    placeholder="Search by product name..."
    className="w-full pl-4 pr-4 py-3 rounded-full border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-white bg-gray-800 text-sm"
  />
</div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-4 top-2.5 w-6 h-6 text-red-400"
        fill="none"
        viewBox="0 0 24 24"
        // stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 3a8 8 0 110 16 8 8 0 010-16zm7 7l4 4"
        />
      </svg>
    </div>

    <button
      onClick={handleSearch}
      className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-red-800 transition-all duration-300"
    >
      Search
    </button>

    {/* Price Filter */}
    <div className="flex items-center gap-6">
      <input
        type="number"
        placeholder="Min Price"
        onChange={(e) =>
          setFilterByPrice((prev) => ({ ...prev, min: e.target.value }))
        }
        className="w-full pl-12 pr-4 py-3 rounded-full border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-white bg-gray-800"
      />
      <input
        type="number"
        placeholder="Max Price"
        onChange={(e) =>
          setFilterByPrice((prev) => ({ ...prev, max: e.target.value }))
        }
        className="w-full pl-12 pr-4 py-3 rounded-full border border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-white bg-gray-800"
      />
      <button
        onClick={handlePriceFilter}
        className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300"
      >
        Filter
      </button>
    </div>
  </div>
)}


     

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
          >
            <img
              className="w-full h-48 object-cover rounded-md mb-2"
              src={product.imageUrl}
              alt={product.name}
            />
            <h2 className="text-lg font-bold text-gray-700 mb-1 uppercase">
              {product.name}
            </h2>
            <p className="text-red-600 font-semibold text-xl mb-2">${product.price}</p>
            <p className="text-gray-500 text-sm mb-4">
              {product.description.slice(0, 60)}...
            </p>
            <Link
              to="/product"
              state={product}
              className="inline-flex items-center justify-center px-4 py-2 text-white bg-black rounded-full hover:bg-gray-800 transition-all duration-200"

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
