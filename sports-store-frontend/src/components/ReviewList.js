import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [products, setProducts] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [newReview, setNewReview] = useState({ comment: '', rating: '', productId: '', customerId: '' });

    useEffect(() => {
        fetchReviews();
        fetchProducts();
        fetchCustomers();
    }, [selectedProduct, selectedCustomer]);

    const fetchReviews = async () => {
        try {
            const response = await axios.get(`/api/reviews${selectedProduct ? `/product/${selectedProduct}` : ''}${selectedCustomer ? `/customer/${selectedCustomer}` : ''}`);
            setReviews(response.data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const fetchCustomers = async () => {
        try {
            const response = await axios.get('/api/customers');
            setCustomers(response.data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const addReview = async () => {
        try {
            await axios.post('/api/reviews', newReview);
            fetchReviews();
            setNewReview({ comment: '', rating: '', productId: '', customerId: '' });
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    const deleteReview = async (id) => {
        try {
            await axios.delete(`/api/reviews/${id}`);
            fetchReviews();
        } catch (error) {
            console.error('Error deleting review:', error);
        }
    };

    return (
        <div className="review-list">
            <h2>Reviews</h2>
            <div className="filter">
                <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                    <option value="">All Products</option>
                    {products.map(product => (
                        <option key={product.id} value={product.id}>{product.name}</option>
                    ))}
                </select>
                <select value={selectedCustomer} onChange={(e) => setSelectedCustomer(e.target.value)}>
                    <option value="">All Customers</option>
                    {customers.map(customer => (
                        <option key={customer.id} value={customer.id}>{customer.name}</option>
                    ))}
                </select>
            </div>

            <div className="add-review">
                <input
                    type="text"
                    name="comment"
                    placeholder="Comment"
                    value={newReview.comment}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="rating"
                    placeholder="Rating (1-5)"
                    value={newReview.rating}
                    onChange={handleInputChange}
                />
                <select
                    name="productId"
                    value={newReview.productId}
                    onChange={handleInputChange}
                >
                    <option value="">Select Product</option>
                    {products.map(product => (
                        <option key={product.id} value={product.id}>{product.name}</option>
                    ))}
                </select>
                <select
                    name="customerId"
                    value={newReview.customerId}
                    onChange={handleInputChange}
                >
                    <option value="">Select Customer</option>
                    {customers.map(customer => (
                        <option key={customer.id} value={customer.id}>{customer.name}</option>
                    ))}
                </select>
                <button onClick={addReview}>Add Review</button>
            </div>

            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        {review.comment} - Rating: {review.rating}
                        <button onClick={() => deleteReview(review.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewList;
