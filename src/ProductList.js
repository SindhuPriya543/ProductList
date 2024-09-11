import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
    }, []); 

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div className='product-list'>
            <h1>List Of Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.title} 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;