import React, { useEffect, useState } from "react";
import User from "../components/User.jsx";
import Informations from "../pages/Inofrmations";
import axios from "axios";
const List = () => {
const [data , setData] = useState([]);
const [posts , setPosts] = useState([]);
const [rangeValue , setRangeValue] = useState(10);

useEffect (() =>{
     axios
     .get("https://jsonplaceholder.typicode.com/users")
     .then((res)=>{
         res.data.length = rangeValue;
         setData(res.data);
     });
 },
 [rangeValue]
);

return (
    <div className="List">
        <input
          type="range"
          min="1"
          max="10"
          style={{ display: "grid",
          "grid-template-columns": "20% 80%",
          padding: "8px",
          "border-radius": "15px",
          background: "rgb(52, 52, 66)",
          color: "rgb(99, 169, 209)",
          "box-shadow": "0 2px 2px rgba(51, 51, 51, 0.3)",
          }}
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        /> 
        <ul className="users-list">
         {data
         .map((user) => (
           <User user ={user} key={user.id} />
         ))
        } 
       </ul>
       <div>
       </div>
    </div>
);
};
export default List;