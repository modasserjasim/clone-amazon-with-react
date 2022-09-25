import React from 'react';
import './Product.css'

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, price, seller, ratings, img } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p className='ratings'>Ratings: {ratings}</p>
            </div>

            <button onClick={() => handleAddToCart(props.product)} className='add-to-cart' type="submit">Add to Cart <i className="fa-solid fa-cart-plus"></i></button>
        </div>
    );
};

export default Product;