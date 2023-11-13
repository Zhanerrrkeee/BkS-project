import React, {useState, useEffect, useContext} from 'react'
import './detailsSection.styles.css';
import { useParams, useNavigate } from 'react-router-dom';
import { BookData } from '../../../mockData';
import { CartContext, UserContext } from '../../../App'; 
//useContext is in order to get user data

const DetailsSection = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState({}); // Use square brackets for destructuring


    const user=useContext(UserContext);
    const {cartItems,setCartItems}=useContext(CartContext);
    const navigate=useNavigate();


    useEffect(() => {
        let newData = BookData.filter((book) => book.id === parseInt(id));

        console.log(newData);
        setBookData(newData[0]);
    }, [id])

    const handleAddToCart=()=>{
        if(user){
            // //add to cart
            setCartItems([...cartItems,bookData]);
            // alert( 'The book $bookData.book_name is added to the cart');
        }else{
            navigate('/login');
            alert("Please Login or Sign Up first");

        }
    }

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

                        <a onClick={handleAddToCart}  className='button-primary'>Add To Cart</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsSection;