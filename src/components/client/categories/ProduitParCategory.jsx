import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal';
import './ProduitParCategory.css';

export const ProduitParCategory = () => {
  const { idproduit } = useParams();
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:4000/product/productsbyCat/${idproduit}`);
      setProduits(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    if (idproduit) {
      fetchProducts();
    }
  }, [idproduit]);

  return (
    
    <div className="produits-category-container">
      <h1 className="text-center">Products for this Category</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="produits-grid">
          {produits.length > 0 ? (
            produits.map((produit) => (
              <div
                key={produit._id}
                className="product-card"
                onClick={() => openModal(produit)}
              >
                <img
                  src={produit.imageUrl}
                  alt={produit.name}
                  className="product-image"
                />
                <div className="product-details">
                  <h3 className="product-name">{produit.name}</h3>
                  <p className="product-price">${produit.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No products available for this category.</p>
          )}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        product={selectedProduct}
      />
    </div>
  );
};
