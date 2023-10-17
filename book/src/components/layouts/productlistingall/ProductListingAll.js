//in book page
import React from 'react';
import './productListingAll.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';

const ProductListingAll=()=>{
    return (
        <section className="product-listing-all-container">
            <div className="container">
                <div className="grid-container">
                    <div className="grid-item">
                        <ProductListingCard/>
                    </div>
                    <div className="grid-item">
                        <ProductListingCard/>
                    </div>
                    <div className="grid-item">
                        <ProductListingCard/>
                    </div>
                    <div className="grid-item">
                        <ProductListingCard/>
                    </div>
                    <div className="grid-item">
                        <ProductListingCard/>
                    </div>
                    <div className="grid-item">
                        <ProductListingCard/>
                    </div>
                    <div className="grid-item">
                        <ProductListingCard/>
                    </div>
                    <div className="grid-item">
                        <ProductListingCard/>
                    </div>
                    <div className="grid-item">
                        <ProductListingCard/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductListingAll;