import React from "react";
import Navigation from "../components/Navigation";
import List from "../components/List";

const Home = () => {
    return(
       <div className="Users">
         <Navigation/>
         <h1 style={{"text-align" :"center"}}>Users list ! </h1>
         <br/>
         <List/>
       </div>
    );
};
export default Home;