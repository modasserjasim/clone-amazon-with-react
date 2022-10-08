import React, { useState } from 'react';
import './Orders.css';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderReviewItems from '../OrderReviewItems/OrderReviewItems';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    return (
        <div className='orders-container'>
            <div className='orders'>
                {
                    cart.map(product => <OrderReviewItems key={product.id} product={product}></OrderReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;