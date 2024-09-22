import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewForm = ({ review, fetchReviews, setEditingReview }) => {
  const [content, setContent] = useState('');
  const [productId, setProductId] = useState('');
  const [customerId, setCustomerId] = useState('');

  useEffect(() => {
    if (review) {
      setContent(review.content);
      setProductId(review.productId);
      setCustomerId(review.customerId);
    } else {
      setContent('');
      setProductId('');
      setCustomerId('');
    }
  }, [review]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (review) {
      await axios.put(`/api/reviews/${review.id}`, { content, productId, customerId });
      setEditingReview(null);
    } else {
      await axios.post('/api/reviews', { content, productId, customerId });
    }
    fetchReviews();
    setContent('');
    setProductId('');
    setCustomerId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Review Content"
        required
      />
      <input
        type="text"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        placeholder="Product ID"
        required
      />
      <input
        type="text"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        placeholder="Customer ID"
        required
      />
      <button type="submit">{review ? 'Update' : 'Add'} Review</button>
    </form>
  );
};

export default ReviewForm;
