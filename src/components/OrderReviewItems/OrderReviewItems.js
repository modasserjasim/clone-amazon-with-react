import React from 'react';
import './OrderReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const OrderReviewItems = ({ product }) => {
    console.log(product);
    const { img, name, price, quantity, shipping } = product;
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
            <p> <FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon></p>

        </div>
    );
};

export default OrderReviewItems;