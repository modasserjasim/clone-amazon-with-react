import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, seller, ratings, img } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button className='add-to-cart' Type="submit">Add to Cart <i class="fa-solid fa-cart-plus"></i></button>
        </div>
    );
};

export default Product;