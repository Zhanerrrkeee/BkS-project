import React from "react";
import './ProductListing.styles.css';
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";
import { BookData } from "../../../mockData";

const ProductListing=()=>{
    return(
        <div className="product-listing-container">
            <div className="container">
                <h2>Here are some <span className="text-primary">books </span>that you might like</h2>
                <div className="listing-container">
                    {BookData.slice(0,4).map((book)=>(
                        <ProductListingCard key={book.id} BookData={book}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductListing;