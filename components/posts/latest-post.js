import { useEffect, useState } from "react";
import CommentList from "./comment-list";
import Interactions from "./interactions";

export default function LatestPost(props) {
  const postId = props.id;

  console.log("post props");
  console.log(props);

  const [showingComments, setShowingComments] = useState(false);
  const [likes, setLikes] = useState(props.likes);

  function showComments() {
    setShowingComments(!showingComments);
  }

  function addLike() {
    fetch("api/addLike", {
      method: "PATCH",
      body: JSON.stringify({ postId }),
      headers: { "Content-Type": "application/json" },
    }).then(setLikes(likes + 1));
  }

  return (
    <div id={props.id} className="mx-auto bg-dark p-4 rounded-3 my-4">
      <div className="vl position-relative ps-1 mx-4">
        <small className="text-primary">
          {props.year + ", " + props.month + " " + props.day}
        </small>
        <div>
          <h2 className="fw-bold">{props.title}</h2>
        </div>
        <p>{props.description.slice(0, props.description.indexOf("."))}...</p>
      </div>

      <div
        id={"carousel" + props.id}
        className="carousel slide card-img-bottom"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={`/${props.images[1]}`}
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "cover", height: "400px", width: "auto" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={`/${props.images[0]}`}
              className="d-block w-100"
              alt="..."
            />
          </div>
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
        <div className="mt-3 d-flex">
          <a type="button" class="btn btn-secondary ms-auto" href="blog">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}
