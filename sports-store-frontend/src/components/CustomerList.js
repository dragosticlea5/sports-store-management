import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerForm from './CustomerForm';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const response = await axios.get('/api/customers');
    setCustomers(response.data);
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/customers/${id}`);
    fetchCustomers();
  };

  return (
    <div>
      <h2>Customers</h2>
      <CustomerForm customer={editingCustomer} fetchCustomers={fetchCustomers} setEditingCustomer={setEditingCustomer} />
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            {customer.name} - {customer.email}
            <button onClick={() => handleEdit(customer)}>Edit</button>
            <button onClick={() => handleDelete(customer.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
