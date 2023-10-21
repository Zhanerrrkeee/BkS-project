import React, {useEffect} from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/footer";
import { useLocation } from "react-router-dom";
import { BookData } from '../../mockData'; 

const SearchPage = () =>{
    const location = useLocation();

    useEffect(()=>{
        let searchValue = [];

        searchValue= BookData.filter((data)=> data.book_name.toLowerCase().includes(location.state.toLowerCase()));

        console.log(searchValue);
    },[])
    return (
        <section>
            <Navbar darkTheme={true} />
            <div className="search-result-container">
                <div className="container">
                        <h2>Your Search Result</h2>
                </div>
            </div>
            
            <Footer />
        </section>
    )
}

export default SearchPage;