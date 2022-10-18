import { useEffect, useState } from "react";
import CommentList from "./comment-list";
import Interactions from "./interactions";

export default function Post(props) {
  const postId = props.id;

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
    <div className="row">
      <div className="col-12 col-md-6 mx-auto">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              <small className="text-muted">{props.list}</small>
              <small className="text-muted">{props.year}</small>
              <small className="text-muted">
                {props.month} {props.day}
              </small>
            </p>
            <p className="card-text">{props.description}</p>
          </div>
          <div
            id={"carousel" + props.id}
            className="carousel slide card-img-bottom"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={`/${props.images[1]}`}
                  className="d-block w-100"
                  alt="..."
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
          </div>
          <div className="card-body">
            <Interactions
              postId={props.id}
              addLike={addLike}
              showComments={showComments}
              likes={likes}
            ></Interactions>
          </div>
          {showingComments && (
            <CommentList postId={postId} showingComments={showingComments} />
          )}
        </div>
      </div>
    </div>
  );
}
