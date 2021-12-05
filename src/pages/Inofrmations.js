import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";
const Informations = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/?userId=" + id
      )
      .then((res) => {
        res.data.length = 5;
        setData(res.data);
      })
  }, []);
  const handleDelete = (id) =>{
    axios.delete("https://jsonplaceholder.typicode.com/posts/" + id)
    .then (console.log("deleted item"));
    navigate('/');
  }
  const listItems = data.map((post) =>
    <ul style={{
      "list-style-type": "none",
      width: "500px",
      padding: "30px",
      "background-color": "rgb(211, 187, 168)",
      border: "15px solid rgb(197, 102, 116)",
      "margin-left": "20px",
      "margin-right": "auto",
    }}>
      <li> Post number :{post.id} </li>
      <li> Title : {post.title} </li>
      <li> Body :{post.body} </li>
      <br/>
      <li> <button class="button button1"onClick={() => navigate('/posts/' + post.id)}>
         Edit
      </button>
      </li>
      <li> <button class="button button1"onClick={() => handleDelete(post.id)}>
         Delete
      </button>
      </li>
    </ul>
  );
  return (
    <div className="Informations">
      <h1 className="header">Latest five posts</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Informations;