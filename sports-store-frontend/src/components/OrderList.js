import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderForm from './OrderForm';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders', error);
    }
  };

  const handleEdit = (order) => {
    setSelectedOrder(order);
    setIsFormVisible(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/orders/${id}`);
    fetchOrders();
  };

  const handleFormClose = () => {
    setSelectedOrder(null);
    setIsFormVisible(false);
    fetchOrders();
  };

  return (
    <div>
      <h2>Orders</h2>
      <button onClick={() => setIsFormVisible(true)}>Add Order</button>
      {isFormVisible && (
        <OrderForm
          order={selectedOrder}
          onClose={handleFormClose}
        />
      )}
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order ID: {order.id} - Customer ID: {order.customerId}
            <button onClick={() => handleEdit(order)}>Edit</button>
            <button onClick={() => handleDelete(order.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
