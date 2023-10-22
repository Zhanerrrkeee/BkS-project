import React, {useState, useEffect} from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/footer";
import { useLocation } from "react-router-dom";
import { BookData } from '../../mockData'; 
import SearchResultCard from "../../components/cards/search-result-card/SearchResultCard";


const SearchPage = () =>{
    const location = useLocation();
    const [searchResult, setSearchResult]=useState([]);
    useEffect(()=>{
        let searchValue = [];

        searchValue= BookData.filter((data)=> data.book_name.toLowerCase().includes(location.state.toLowerCase()));

        setSearchResult(searchValue);
    },[])
    return (
        <section>
            <Navbar darkTheme={true} />
            <div className="search-result-container">
                <div className="container">
                        <h2>Your Search Result</h2>
                        {searchResult.length === 0 ? (
                        <p>OOPS! There is no such kind of book...</p>
                    ) : (
                        searchResult.map((result, index) => (
                            <SearchResultCard key={index} BookData={result} />
                        ))
                    )}
                </div>
            </div>
            
            <Footer />
        </section>
    )
}

export default SearchPage;