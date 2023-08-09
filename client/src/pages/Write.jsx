import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.content?.rendered || "");
  const [title, setTitle] = useState(state?.title?.rendered || "");
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate()

  const headers = {
    'Authorization': `Bearer ${user?.token}`
  }
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(user)
    if (user == "" || user == null) {
      alert("You need to login to post or update post")
      navigate("/login");
    }
    else {
      try {
        state
          ? await axios.put(`http://localhost/wp-headless/server/wp-json/wp/v2/posts/${state.id}`, {
            title,
            content: value,
          },
          {
             headers
          })
          : await axios.post("http://localhost/wp-headless/server/wp-json/wp/v2/posts", {
            title,
            content: value,
            status : 'publish'
          },
            {
               headers
            });
        navigate("/")
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="buttons">
          <button onClick={handleClick}>Publish</button>
        </div>

      </div>

    </div>
  );
};

export default Write;
