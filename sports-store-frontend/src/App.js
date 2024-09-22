import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import CustomerList from './components/CustomerList';
import OrderList from './components/OrderList';
import ReviewList from './components/ReviewList';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="button-container">
                    <button onClick={() => window.location.href = '/categories'}>Categories</button>
                    <button onClick={() => window.location.href = '/products'}>Products</button>
                    <button onClick={() => window.location.href = '/customers'}>Customers</button>
                    <button onClick={() => window.location.href = '/orders'}>Orders</button>
                    <button onClick={() => window.location.href = '/reviews'}>Reviews</button>
                </div>
                <Routes>
                    <Route path="/categories" element={<CategoryList />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/customers" element={<CustomerList />} />
                    <Route path="/orders" element={<OrderList />} />
                    <Route path="/reviews" element={<ReviewList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
