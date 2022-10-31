import { useState } from "react";
import Image from "next/image";

import CommentList from "../comments/comment-list";
import Interactions from "../interactions/interactions";
import Carousel from "./carousel";

export default function Post(props) {
  const postId = props.id;

  const [showingComments, setShowingComments] = useState(false);
  const [likes, setLikes] = useState(props.likes);

  function showComments() {
    setShowingComments(!showingComments);
  }

  function addLike() {
    fetch("/blog/api/addLike", {
      method: "PATCH",
      body: JSON.stringify({ postId }),
      headers: { "Content-Type": "application/json" },
    }).then(setLikes(likes + 1));
  }

  return (
    <div>
      <div className="vl position-relative ps-2 mx-3">
        <p
          className={
            "badge fs-5 rounded-5 position-absolute top-0 end-0 text-white text-bg-" +
            props.list
          }
        >
          {props.list}
        </p>
        <p className="text-primary m-0">
          {props.year + ", " + props.month + " " + props.day}
        </p>
        <p className="fw-bold fs-3 mt-3 mb-0">{props.title}</p>
        <p>{props.description}</p>
      </div>

      {(props.images && props.images.length > 0) && (
        <Carousel 
          postId={postId}
          images={props.images}
        />
      )}

      <div className="mt-3">
        <Interactions
          postId={postId}
          addLike={addLike}
          showComments={showComments}
          likes={likes}
          isShowingCopy={props.isShowingCopy}
          setIsShowingCopy={props.setIsShowingCopy}
        ></Interactions>
      </div>

      {showingComments && (
        <CommentList postId={postId} showingComments={showingComments} />
      )}
    </div>
  );
}
