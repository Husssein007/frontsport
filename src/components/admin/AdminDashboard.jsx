import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { addCategory, addProduct, deleteProduct, fetchCategories, fetchMessages, fetchProducts } from "../../api/api";

const AdminDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "" });
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productData, categoryData, messageData] = await Promise.all([
          fetchProducts(),
          fetchCategories(),
          fetchMessages(),
        ]);

        setProducts(productData);
        setCategories(["all", ...categoryData.map((cat) => cat.name)]);
        setMessages(messageData);
      } catch (error) {
        toast.error("Error loading data.");
      }
    };

    loadData();
  }, []);

  const handleAddProduct = async () => {
    if (newProduct.name && newProduct.price && newProduct.category) {
      try {
        const addedProduct = await addProduct(newProduct);
        setProducts([...products, addedProduct]);
        toast.success("Product added successfully!");
        setNewProduct({ name: "", category: "", price: "" });
      } catch (error) {
        toast.error("Error adding product.");
      }
    } else {
      toast.error("Please fill out all fields.");
    }
  };

  const handleAddCategory = async () => {
    if (newCategory.trim()) {
      try {
        const addedCategory = await addCategory(newCategory);
        setCategories([...categories, addedCategory.name]);
        toast.success("Category added successfully!");
        setNewCategory("");
      } catch (error) {
        toast.error("Error adding category.");
      }
    } else {
      toast.error("Category name cannot be empty.");
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product._id !== id));
      toast.success("Product deleted successfully.");
    } catch (error) {
      toast.error("Error deleting product.");
    }
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-5xl bg-white rounded-lg shadow-lg p-8">
        {/* Category Management */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Manage Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <input
              type="text"
              placeholder="New Category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddCategory}
              className="py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
            >
              Add Category
            </button>
          </div>
        </section>

        {/* Product Management */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Manage Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            className="w-full px-4 py-2 mb-4 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddProduct}
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
          >
            Add Product
          </button>
        </section>

        {/* Product List */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Product List</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Filter By Category:</label>
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <ul className="divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <li key={product._id} className="py-4 flex justify-between items-center">
                <span>{product.name} (${product.price})</span>
                <button
                  onClick={() => handleDeleteProduct(product._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Messages */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          <ul className="divide-y divide-gray-200">
            {messages.map((message) => (
              <li key={message._id} className="py-4">
                <p>{message.content}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
