import React from 'react'
import './detailsSection.styles.css';
import BookDetailImg from '../../../assets/books-images/dor.jpg'


const DetailsSection=()=>{
    return (
        <section className='detail-section-container'>
            <div className='container'>
                <div className='flex-container'>
                    <div className='book-img-container'>
                        <img  src={BookDetailImg} alt="book" />
                    </div>
                    <div className='book-detail-container'>
                        <h2>BookName</h2>
                        <p className='text-primary'>Author Name</p>
                        <p className='book-description'>Book Description</p>
                        <p><b>Language</b>: English</p>
                        <p><b>Book Length</b>: 300 pages</p>
                        <h3>2500&#8376;</h3>

                        <a href="#" className='cart-button'>Add To Cart</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsSection;