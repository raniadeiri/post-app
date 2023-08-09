import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost/wp-headless/server/wp-json/wp/v2/posts`);
        setPosts(res.data);
       
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  console.log(posts)
 
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    <div className="home">
      <div className="posts">
      {posts.map((post) => (
          <div className="post" key={post.id}>
            
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title.rendered}</h1>
              </Link>
              <p>{getText(post.content.rendered)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
