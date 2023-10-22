import React, {useState, useEffect} from 'react'
import './detailsSection.styles.css';
import { useParams } from 'react-router-dom';
import { BookData } from '../../../mockData';

const DetailsSection = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState({}); // Use square brackets for destructuring

    useEffect(() => {
        let newData = BookData.filter((book) => book.id === parseInt(id));

        console.log(newData);
        setBookData(newData[0]);
    }, [id]);
    return (
        <section className='detail-section-container'>
            <div className='container'>
                <div className='flex-container'>
                    <div className='book-img-container'>
                        <img  src={bookData.book_url} alt="book" />
                    </div>
                    <div className='book-detail-container'>
                        <h2>{bookData.book_name}</h2>
                        <p className='text-primary'>{bookData.author_name}</p>
                        <p className='book-description'>{bookData.book_description}</p>
                        <p><b>{bookData.language}</b>: English</p>
                        <p><b>Length</b>: {bookData.print_length}</p>
                        <h3>{bookData.price}&#8376;</h3>

                        <a href="#" className='button-primary'>Add To Cart</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsSection;