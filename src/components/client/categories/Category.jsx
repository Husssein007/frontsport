import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/categories/");
      setCategories(response.data);
      console.log("Categories: ", response.data);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  console.log("categorie product", categories);

  return (
    <div className="categories-container py-12 bg-black min-h-screen">
      <h1 className="text-center text-3xl font-bold text-white tracking-wide uppercase mt-6 mb-6">
      Shop By Category
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16">
        {categories.map((category) => (
          <Link
            key={category._id}
            to={`/shop/${category._id}`}
            className="category-card relative overflow-hidden rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="category-img w-full h-56 object-cover rounded-t-lg"
            />
            <div className="p-4 bg-black">
              <h2 className="category-title text-xl font-semibold text-white text-center uppercase">
                {category.name}
              </h2>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Shop {category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
