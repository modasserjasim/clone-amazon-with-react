import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart);
    let cartTotal = 0;
    let shippingCost = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        cartTotal = cartTotal + product.price * quantity;
        shippingCost = shippingCost + product.shipping;
    }
    const tax = (0.10 * cartTotal).toFixed(2);
    const grandTotal = cartTotal + shippingCost + parseFloat(tax);
    return (
        <div>
            <div className='cart-info'>
                <h3>Order Summary</h3>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${cartTotal}</p>
                <p>Total Shipping Charge: ${shippingCost}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default Cart;