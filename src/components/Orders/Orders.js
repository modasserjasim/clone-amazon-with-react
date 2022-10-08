import React, { useState } from 'react';
import './Orders.css';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderReviewItems from '../OrderReviewItems/OrderReviewItems';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) => {
        const remainingProducts = cart.filter(product => product.id !== id);
        setCart(remainingProducts);
        removeFromDb(id);
    }
    return (
        <div className='orders-container'>
            <div className='orders'>
                {
                    cart.map(product => <OrderReviewItems
                        key={product.id}
                        product={product}
                        cart={cart}
                        handleRemoveItem={handleRemoveItem}
                    ></OrderReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;