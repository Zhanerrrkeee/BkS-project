import React from "react";
import './ProductListing.styles.css';
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";

const ProductListing=()=>{
    return(
        <div className="product-listing-container">
            <div className="container">
                <h2>Here are some <span className="text-primary">books </span>that you might like</h2>
                <div className="listing-container">
                    <ProductListingCard/>
                    <ProductListingCard/>
                    <ProductListingCard/>
                </div>
            </div>
        </div>
    )
}

export default ProductListing;