import React from "react";
import './cart-items-container.styles.css'
import CartItemCard from "../../cards/cart-item-card/CartItemCard";

const CartItemsContainer=()=>{
    return (
        <section className="cart-items-container">
            <div className="container">
                <h2>Cart</h2>
                <CartItemCard/>
                <CartItemCard/>
            </div>
        </section>
    )
}

export default CartItemsContainer;