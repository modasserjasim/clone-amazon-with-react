import React from 'react';
import './OrderReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const OrderReviewItems = ({ product, cart, handleRemoveItem }) => {
    console.log(product);
    const { id, img, name, price, quantity, shipping } = product;
    return (
        <div className='review-item'>

            <div className='review-item-info'>
                <div><img src={img} alt={name} /></div>
                <div>
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>
                    <p>Shipping: ${shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
            </div>
            <button className='delete-btn' onClick={() => handleRemoveItem(id)}>
                <FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default OrderReviewItems;