import React, { Fragment, useEffect, useState ,useRef} from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";
const Posts = () => {
  const [post, getPost] = useState([]);
  const { id } = useParams();
  const titleRef = useRef()
  const bodyRef = useRef()
  const navigate = useNavigate();
  const url = "https://jsonplaceholder.typicode.com/posts/" + id;
  async function getApiPost() {
    const response = await axios.get(url);
    getPost(response.data);
  }
  useEffect(() => {
    getApiPost();
  }, []);
  const handleSubmit = (id) => {
    const post = { title: titleRef.current.value, body: bodyRef.current.value };
    console.log(post);
    axios.put(url, post)
      .then(navigate('/posts/' + id));
  }
  return (
    <Fragment>
      <h1>Post:</h1>
      <form name="myForm">
         <table class="form-style">
            <tr>
               <td>
                  <label>
                     Title <span class="required">*</span>
                  </label>
               </td>
               <td>
                  <input ref={titleRef} placeholder={post.title} type="text" name="name" class="long"/>
                  <span class="error" id="errorname"></span>
               </td>
            </tr>
            <tr>
               <td>
                  <label>
                     Message <span class="required">*</span>
                  </label>
               </td>
               <td>
                  <textarea ref={bodyRef} placeholder={post.body} name="message" class="long field-textarea"></textarea>
                  <span class="error" id="errormsg"></span>
               </td>
            </tr>
            <tr>
               <td>
                  <input type="submit" onClick={() => handleSubmit(post.id)} value="Envoyer"/>      
               </td>
            </tr>
         </table>
      </form>
    </Fragment>
  );

};
export default Posts;