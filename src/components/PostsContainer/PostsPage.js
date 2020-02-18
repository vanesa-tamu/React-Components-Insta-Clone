//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post.js";
import "./Posts.css";

import styled from 'styled-components';


// import data 
import dummyData from '../../dummy-data.js'

const PostDiv = styled.div`
box-sizing: border-box;
max-width: 600px;
width: 100%;
background: white;
border: 1px solid lightgrey;
display: flex;
flex-flow: column;
box-shadow: 0 0 3px lightgrey;
margin: 50px 0;
`;

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

