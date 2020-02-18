//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post.js";
import "./Posts.css";

import styled from 'styled-components';


// import data 
import dummyData from '../../dummy-data.js'



const PostsPage = () => {
  // set up state for your data
  const [post] = useState(dummyData)
  console.log('DUMMY', post)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {post.map((p, index) => {
        return <Post key={index} post={p}/>
      })}


    </div>
  );
};

export default PostsPage;

