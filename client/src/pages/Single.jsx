import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("user"))

  const headers = {
    'Authorization': `Bearer ${user?.token}`
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost/wp-headless/server/wp-json/wp/v2/posts/${postId}`);
      
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async ()=>{
    try {
      await axios.delete(`http://localhost/wp-headless/server/wp-json/wp/v2/posts/${postId}`, {
        headers
     });
      alert("Post deleted Successfully!")
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

   const handleUpdate = async () =>{
    navigate(
      '/write',
      {
        state: {
          post : post
        }
      }
    )
   }
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="single">
      <div className="content">
       
        <div className="user">
         
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
        
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" onClick={handleUpdate} />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          
        </div>
        <h1>{post.title?.rendered}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content?.rendered),
          }}
        ></p>      </div>
     
    </div>
  );
};

export default Single;
