import { useRouter } from "next/router";
import { useState } from "react";

import CommentList from "../comments/comment-list";
import Interactions from "../interactions/interactions";
import Carousel from "./carousel";

export default function Post(props) {
  const router = useRouter();
  const postId = props.id;

  const [showingComments, setShowingComments] = useState(false);
  const [likes, setLikes] = useState(props.likes);

  const descriptionList = props.description.split("\n");

  function filterByList(list) {
    router.push({ pathname: "", query: { list: list } }, undefined, {
      shallow: true,
    });
    props.setCurrentList(list);
  }

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
    <div
      className="col-12 col-md-10 col-lg-8 mx-auto bg-dark py-3 rounded my-5 shadow"
      id={props.id}
    >
      <div className="vl ps-2 mx-3">
        <div className="d-flex justify-content-between">
          <p className="text-primary m-0">
            {props.year + ", " + props.month + " " + props.day}
          </p>
          <button
            className={"badge fs-5 rounded-5 text-white btn  btn-" + props.list}
            onClick={() => {
              filterByList(props.list);
            }}
          >
            {props.list}
          </button>
        </div>

        <p className="fw-bold fs-3 mb-0">{props.title}</p>
        <div style={{ maxHeight: 200, overflow: "auto" }}>
          {descriptionList.map((paragraph) => (
            <p className="tab">{paragraph}</p>
          ))}
          <p>
            {props.links.map((link) => (
              <a className="me-2" href={link}>{link}</a>
            ))}
          </p>
        </div>
      </div>

      {props.images && props.images.length > 0 && (
        <Carousel postId={postId} images={props.images} />
      )}

      <Interactions
        postId={postId}
        addLike={addLike}
        showComments={showComments}
        likes={likes}
      ></Interactions>

      {showingComments && (
        <CommentList postId={postId} showingComments={showingComments} />
      )}
    </div>
  );
}
