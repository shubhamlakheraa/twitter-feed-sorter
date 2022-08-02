import React from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function Main(props) {



const[usernamereg, setUsername] = React.useState("")
const[queryreg, setquery] = React.useState("")

function handlechange(event){
  setquery(event.target.value)
}



// This function navigates to the feed page of the application
    const nav = useNavigate();

    const onsearch = () => {
      Axios.post("/", {
        username: usernamereg,
        query : queryreg,
      }) 
      .then((response) => {
        if(!response.data){
          console.log("error")
        }
        else{
          props.setTweetArray(response.data)
          nav('/feed/:pages')
        }
        
        // console.log(response.data)
      })
      

    }

    



// Options for the feed to sort in order.


  return (
    <div className="min-h-screen bg-[#000000] w-[100%] h-[100%]">
      
      <h1 className="text-3xl text-center pt-6 font-serif">
        <font color="#1DA1F2">Twitter </font>
        <font color="#ffffff" >Feed </font>
        <font color="#ff6314">Sorter</font>
      </h1>
      <h4 className="text-center mt-10 text-xl mt-20 mb-3 text-[#ff6314]">Please Enter the Username </h4>

      <div className="text-center  ">
        <input
          type="text"
          className="form-input rounded-lg border-2 hover:border-[#1DA1F2] text-center"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        ></input>
        <div>
        <select className="form-select ml-[35%] mr-[35%] mt-10 rounded-lg  hover:border-[#1DA1F2] text-center "  
           onChange={handlechange}>
            <option value="">Choose Option</option>
            <option value="TopPost">Top Posts of All Time</option>
            <option value="Recent">Recent Posts</option>
            

     </select>
        </div>

        <button onClick={onsearch} className="mt-10 w-20 border-2 rounded-lg hover:border-[#ff6314] border-[#1DA1F2] text-[#ffffff] p-1">Search</button>
      </div>
      


    </div>
  );
}
