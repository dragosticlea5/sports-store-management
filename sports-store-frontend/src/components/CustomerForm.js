import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerForm = ({ customer, fetchCustomers, setEditingCustomer }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (customer) {
      setName(customer.name);
      setEmail(customer.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [customer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (customer) {
      await axios.put(`/api/customers/${customer.id}`, { name, email });
      setEditingCustomer(null);
    } else {
      await axios.post('/api/customers', { name, email });
    }
    fetchCustomers();
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Customer Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Customer Email"
        required
      />
      <button type="submit">{customer ? 'Update' : 'Add'} Customer</button>
    </form>
  );
};

export default CustomerForm;
