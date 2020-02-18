// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

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
      {timestamp}
      <CommentInput /> 
    </div>
  );
};

export default CommentSection;

//changeComment= {() =>setComment(event.taget.value)}
