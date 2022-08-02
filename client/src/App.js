import './App.css';
import Main from "./pages/main"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Feed from "./pages/feed.js"
import React from "react"

export default function App(){

    const[tweetArray, setTweetArray] = React.useState(
        () => JSON.parse(localStorage.getItem("tweetArray")) || [])


    React.useEffect(() => {
        localStorage.setItem("tweetArray", JSON.stringify(tweetArray))
    }, [tweetArray])







    return (
    <div>
        <Router>
            <Routes>
               <Route 
               path='/' 
               element={
               <Main 
               setTweetArray={setTweetArray} 
               tweetArray={tweetArray}
               />} 
               />
               <Route 
               path='/feed/:pages' 
               element={
               <Feed 
                setTweetArray={setTweetArray} 
                tweetArray={tweetArray}
                />} 
               />

            </Routes>
            </Router>
        
    </div>
    )
}




