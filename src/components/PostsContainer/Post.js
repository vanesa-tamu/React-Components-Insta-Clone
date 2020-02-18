// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  console.log('PrOPs', props)
  // set up state for the likes
  const [like, setLike] = useState(props.post.likes)
  console.log('like state', like)
  return (
    
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection like={like} updateLike={() => setLike(like + 1)}/>
    
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
        timestamp={props.post.timestamp}
      />

    </div>
  );
};

export default Post;


//username={p.username} thumbnailUrl={p.thumbnailUrl} imageUrl={p.imageUrl}
// const [like, setLike] = useState(dummyData[0].likes)

