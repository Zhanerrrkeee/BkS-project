import React from "react";
import Navbar from '../../components/layouts/navbar/Navbar';
import DetailsSection from "../../components/layouts/details-section/DetailsSection";
import Footer from '../../components/layouts/footer/Footer';
import Comment from '../../components/comment/comment';

const BookDetails=()=>{
    return(
        <div>
            <Navbar darkTheme={true}/>

            <DetailsSection />
            <Comment/>
            <Footer/>
        </div>
    )
}

export default BookDetails;