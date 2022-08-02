import React from "react"
import ListTweet from "./listTweet.js"

import Pagination from "./pagination"



export default function Feed(props){

// const[temp, setTemp] = React.useState([])

const[currentPage, setCurrentPage] = React.useState(
    () => JSON.parse(localStorage.getItem("currentPage")) || 1
);

React.useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage))
},[currentPage])

const[postsPerPage] = React.useState(25);


const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = props.tweetArray.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="min-h screen bg-[#000000] pt-6" >
            <h1 className="text-center text-6xl pb-10  font-serif text-[#1DA1F2]">Your Twitter Feed is ready.</h1>
            {/* {console.log(props.tweetArray)} */}
            {/* <ListTweet twee={props.tweetArray} data={data.slice(startIndex, endIndex)}   /> */}
            
            <ListTweet twee={currentPosts}   />
            <Pagination
        postsPerPage={postsPerPage}
        totalPosts={props.tweetArray.length}
        paginate={paginate}
        currentPage={currentPage}
      />

                
   

            </div>
    )
}