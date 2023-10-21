import React from "react";
import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BooksPage";
import BookDetails from "./pages/bookdetailpage/BookDetails";
import Login from "./pages/loginpage/Login";
import Signup from "./pages/signup-page/Signup";
import SearchPage from "./pages/SearchPage/SearchPage";

const App=()=>{
    return(
        <div>
            <Routes>
                 <Route path="/" element={<HomePage/>}/>
                 <Route path="/books" element={<BooksPage/>}/>
                 <Route path="/book-details/:id" element={<BookDetails/>}/> 
                 <Route path="/search" element={<SearchPage/>}/>
                 <Route path="/signup" element={<Signup/>}/> 
                 <Route path="/login" element={<Login/>}/> 
            </Routes>
        
        </div>
    )
}

export default App;