import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ product, fetchProducts, setEditingProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setCategoryId(product.categoryId);
    } else {
      setName('');
      setPrice('');
      setCategoryId('');
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (product) {
      await axios.put(`/api/products/${product.id}`, { name, price, categoryId });
      setEditingProduct(null);
    } else {
      await axios.post('/api/products', { name, price, categoryId });
    }
    fetchProducts();
    setName('');
    setPrice('');
    setCategoryId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price"
        required
      />
      <input
        type="text"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        placeholder="Category ID"
        required
      />
      <button type="submit">{product ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
