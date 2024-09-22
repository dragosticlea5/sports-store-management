import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryForm = ({ category, fetchCategories, setEditingCategory }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (category) {
      setName(category.name);
    } else {
      setName('');
    }
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category) {
      await axios.put(`/api/categories/${category.id}`, { name });
      setEditingCategory(null);
    } else {
      await axios.post('/api/categories', { name });
    }
    fetchCategories();
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category Name"
        required
      />
      <button type="submit">{category ? 'Update' : 'Add'} Category</button>
    </form>
  );
};

export default CategoryForm;
