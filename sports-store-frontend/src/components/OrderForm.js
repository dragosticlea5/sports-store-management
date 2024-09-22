import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderForm = ({ order, onClose }) => {
  const [customerId, setCustomerId] = useState('');

  useEffect(() => {
    if (order) {
      setCustomerId(order.customerId);
    }
  }, [order]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = { customerId };

    if (order) {
      await axios.put(`/api/orders/${order.id}`, orderData);
    } else {
      await axios.post('/api/orders', orderData);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{order ? 'Edit Order' : 'Add Order'}</h3>
      <input
        type="text"
        placeholder="Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        required
      />
      <button type="submit">{order ? 'Update' : 'Add'}</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default OrderForm;
