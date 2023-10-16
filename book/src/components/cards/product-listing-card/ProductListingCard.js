import React from "react";
import './ProductListingCard.styles.css';
import ProductImage from '../../../assets/books-images/dor.jpg'


const ProductListingCard=()=>{
    return(
        <div className="listing-container">
                    <div className="product-listing-card">
                        <div className="product-listing-img-container">
                            <img src={ProductImage} alt="product-listing-img" className="product-listing-img" /> 
                        </div>
                        <div className="product-listing-details-container">
                            <h3> Портрет Дориана Грея </h3>
                            <p className="author-name">Oскар Уайльд</p>
                            <p className="pricing"> 1900 &#8376;</p>
                            <a href="a" className="product-listing-button"> Button </a>
                        </div>
                    </div>
                </div>
    )
}

export default ProductListingCard;