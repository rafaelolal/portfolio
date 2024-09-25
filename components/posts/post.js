import { useRouter } from "next/router";
import { useState } from "react";

import CommentList from "../comments/comment-list";
import Interactions from "../interactions/interactions";
import Carousel from "./carousel";

export default function Post(props) {
  const router = useRouter();
  const postId = props.id;

  const [showingComments, setShowingComments] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
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

  const postDate = new Date(props.date);

  return (
    <div
      className="col-12 col-md-10 col-lg-8 mx-auto bg-dark py-3 rounded my-5 shadow"
      id={props.id}
    >
      <div className="vl ps-2 mx-3">
        <div className="d-flex justify-content-between">
          <p className="text-primary m-0">
            {postDate.toLocaleString(undefined, {
              timeZone: "UTC",
              year: "numeric",
              month: "long",
              day: "2-digit",
              weekday: "long",
            })}
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
          {props.links.length > 0 && (
            <p>
              {props.links.map((link, i) => (
                <li key={i} style={{ listStyle: "none" }}>
                  <small>
                    <a key={i} className="me-2" href={link}>
                      {link}
                    </a>
                  </small>
                </li>
              ))}
            </p>
          )}
          {descriptionList.map((paragraph, i) => (
            <p key={i} className="tab">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {props.images && props.images.length > 0 && (
        <Carousel postId={postId} images={props.images} />
      )}

      <Interactions
        postId={postId}
        addLike={addLike}
        showComments={showComments}
        setShowingComments={setShowingComments}
        commentCount={commentCount}
        setCommentCount={setCommentCount}
        likes={likes}
      ></Interactions>

      {showingComments && (
        <CommentList
          postId={postId}
          commentCount={commentCount}
          setCommentCount={setCommentCount}
        />
      )}
    </div>
  );
}
