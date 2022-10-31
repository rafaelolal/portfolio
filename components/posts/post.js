import { useState } from "react";
import Image from "next/image";

import CommentList from "../comments/comment-list";
import Interactions from "../interactions/interactions";

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

      <div
        id={"carousel" + props.id}
        className="carousel slide card-img-bottom"
      >
        <div className="carousel-inner rounded">
          {props.images.map((imageLink) => (
            <div
              className={
                "carousel-item " + (imageLink == props.images[0] && "active")
              }
              key={imageLink}
            >
              <Image
                src={"/blog" + imageLink}
                className="d-block w-100"
                alt="..."
                width="100%"
                height="56%"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={"#carousel" + props.id}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={"#carousel" + props.id}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="mt-3">
        <Interactions
          postId={props.id}
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
