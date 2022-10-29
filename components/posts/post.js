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
      <div id={props.id} className="col-12 col-md-10 col-lg-8 mx-auto bg-dark p-4 rounded-3 my-4">
        <div className="vl position-relative ps-2 mx-4">
        <small className="text-primary">{props.year + ", " + props.month + " " + props.day}</small>
          <div>
            <h2 className="fw-bold">{props.title}</h2>
            <h2>
              <span class="badge rounded-5 text-bg-primary position-absolute top-0 end-0">
                {props.list}
              </span>
            </h2>
          </div>
          <p>{props.description}</p>
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
