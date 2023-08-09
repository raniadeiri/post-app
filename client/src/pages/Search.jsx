import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";


const Search = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState(null);
  const [searched, setSearched] = useState([]);
  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost/wp-headless/server/wp-json/wp/v2/posts`);
        setPosts(res.data);
        setSearched(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
   setSearched(posts.filter((post)=> post.title.rendered.toLowerCase().includes(search) || post.content.rendered.toLowerCase().includes(search)))
  }, [search]);
 
 
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    <div className="home">
          <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      <div className="posts">
      {searched.map((post) => (
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

export default Search;
