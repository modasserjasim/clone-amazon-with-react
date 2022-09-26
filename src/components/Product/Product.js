import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, price, seller, ratings, img } = product;

    return (
        <div className='product'>
            <img src={img !== null || undefined ? img : 'https://res.cloudinary.com/dxdboxbyb/image/upload/v1620052094/ayi6tvyiedrlmjiim6yn.png'} alt="" />

            <div className='product-info'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p className='ratings'>Ratings: {ratings}</p>
            </div>

            <button onClick={() => handleAddToCart(props.product)} className='add-to-cart' type="submit">
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;