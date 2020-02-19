// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

import styled from 'styled-components';

const TimeStamp = styled.div`
max-width: 600px;
width: 100%;
display: flex;
justify-content: flex-start;
font-size: 0.7rem;
color: grey;
padding: 5px;
`;


const CommentSection = props => {
  // Add state for the comments
  const [c, setComment] = useState(props.comments)
  const {timestamp} = props
  console.log('comment state', c)
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
     {c.map((comm, index) => { 
        return <Comment key={index} comment={comm}/>
      })}
      {/* {timestamp} */}
      <TimeStamp>{timestamp}</TimeStamp>
      <CommentInput /> 
    </div>
  );
};

export default CommentSection;

//changeComment= {() =>setComment(event.taget.value)}
//flex-flow: column;
//border: 1px solid red;
