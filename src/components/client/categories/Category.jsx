import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
  const [categories, setCategories] = useState([]);
const  fetchCategories=async()=> {
  try {
    const response = await axios.get("http://localhost:4000/categories/");
    setCategories(response.data);
    console.log("Categories: ", response.data);
  } catch (error) {
    console.error("Failed to fetch categories", error);
  }
}
  useEffect(() => {
    fetchCategories();
  }, []);
console.log('categorie product',categories)
  return (
    <div className="categories-container">
      <h1 className="text-center text-4xl font-extrabold text-gradient bg-clip-text mb-6 transition-all duration-300 hover:text-yellow-500" style={{marginTop:"20px"}}>Categories</h1>
      <div className="grid-container">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop/${category._id}`}
            className="category-card"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="category-img"
            />
            <h2 className="category-title">{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
