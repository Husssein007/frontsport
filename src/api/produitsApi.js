import axios from 'axios';

// Récupérer tous les produits
export const fetchProducts = async () => {
    const { data } = await axios.get(`http://localhost:4000/products/products`);
    return data;
}

// Ajouter un nouveau produit
export const postProduct = async (values) => {
    const addingProduct = await axios.post(`http://localhost:4000/products/products`, { ...values });
   
}

// Supprimer un produit par ID
export const deleteProduct = async (id) => {
    const deletedProduct = await axios.delete(`http://localhost:4000/products/products/${id}`);
   
}

// Mettre à jour un produit par ID
export const updateProduct = async (id, values) => {
    const updatedProduct = await axios.put(`http://localhost:4000/products/products/${id}`, values);
    
}

// Récupérer un produit spécifique par ID
export const getUniqueProduct = async (id) => {
    const { data } = await axios.get(`http://localhost:4000/products/products/${id}`);
    return data;
}
