import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryForm from './CategoryForm';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await axios.get('/api/categories');
    setCategories(response.data);
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/categories/${id}`);
    fetchCategories();
  };

  return (
    <div>
      <h2>Categories</h2>
      <CategoryForm category={editingCategory} fetchCategories={fetchCategories} setEditingCategory={setEditingCategory} />
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => handleEdit(category)}>Edit</button>
            <button onClick={() => handleDelete(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
