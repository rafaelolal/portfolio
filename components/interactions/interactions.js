import { useRef, useState } from "react";
import { useAppContext } from "../../context/state";

import CommentIcon from "../icons/comment-icon";
import LikeIcon from "../icons/like-icon";
import SendIcon from "../icons/send-icon";
import ShareIcon from "../icons/share-icon";
import CommentModal from "./commentModal";

export default function Interactions(props) {
  const { name, setName, email, setEmail, setToast } = useAppContext();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const beNotifiedInputRef = useRef();
  var frequencyValue;
  const [beNotified, setBeNotified] = useState(false);

  function commentSubmitHandler(event) {
    if (event) {
      event.preventDefault();
    }

    if (name != nameInputRef) {
      setName(nameInputRef.current.value);
    }
    if (email != emailInputRef) {
      setEmail(emailInputRef.current.value);
    }

    fetch("/blog/api/addComment", {
      method: "POST",
      body: JSON.stringify({
        postId: props.postId,
        name:
          nameInputRef.current.value.trim() != ""
            ? nameInputRef.current.value
            : "Anonymous",
        email: emailInputRef.current.value,
        body: document.getElementById("commentBody1" + props.postId).value,
        date: new Date(),
        frequencyValue: frequencyValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setToast(data);

        if (data.status == 500) {
          return;
        }

        document.getElementById("commentBody1" + props.postId).value = "";
        document.getElementById("commentBody2" + props.postId).value = "";
        beNotifiedInputRef.current.checked = false;
        setBeNotified(false);
        document.getElementById("commentModalClose" + props.postId).click();
        props.setShowingComments(true);
        props.setCommentCount(props.commentCount + 1);
      });

    if (beNotified) {
      fetch("/blog/api/addEmail", {
        method: "POST",
        body: JSON.stringify({ name, email, frequencyValue }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setToast(data);
        });
    }
  }

  function openCommentModalHandler() {
    if (
      document.getElementById("commentBody1" + props.postId).value.trim() &&
      name
    ) {
      commentSubmitHandler(null);
      return;
    }
    document.getElementById("hiddenCommentSubmit" + props.postId).click();
  }

  function beNotifiedHandler() {
    setBeNotified(!beNotified);
  }

  function frequencyHandler() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        frequencyValue = radioButton.value;
        break;
      }
    }
  }

  function copyLink() {
    var link = "https://ralmeida.dev/blog/posts#" + props.postId;
    navigator.clipboard.writeText(link);
    setToast({ message: "Link copied!", status: 200 });
  }

  function updateCommentBody2() {
    const body1 = document.getElementById("commentBody1" + props.postId);
    const body2 = document.getElementById("commentBody2" + props.postId);
    body2.value = body1.value;
  }

  return (
    <div className="px-3 mt-3">
      <div className="d-flex justify-content-between">
        <div className="">
          <LikeIcon onClick={props.addLike} />
          <small className="text-primary me-2 fs-7">
            {props.likes} {props.likes == 1 ? "like" : "likes"}
          </small>
        </div>

        <div>
          <CommentIcon onClick={props.showComments} />
          <ShareIcon onClick={copyLink} />
        </div>
      </div>

      <div className="input-group mt-2">
        <input
          type="text"
          className="form-control"
          style={{
            borderTopLeftRadius: "20px 20px",
            borderBottomLeftRadius: "20px 20px",
          }}
          placeholder="Write a comment..."
          aria-label="Comment"
          id={"commentBody1" + props.postId}
          onChange={updateCommentBody2}
        />

        <button
          className="btn btn-secondary text-white ps-2"
          type="button"
          style={{
            borderTopRightRadius: "20px 20px",
            borderBottomRightRadius: "20px 20px",
          }}
          onClick={openCommentModalHandler}
        >
          <SendIcon />
        </button>
        <span
          className="visually-hidden"
          data-bs-toggle="modal"
          data-bs-target={"#commentModal" + props.postId}
          id={"hiddenCommentSubmit" + props.postId}
        />
      </div>

      <CommentModal
        name={name}
        email={email}
        nameInputRef={nameInputRef}
        emailInputRef={emailInputRef}
        beNotifiedHandler={beNotifiedHandler}
        beNotifiedInputRef={beNotifiedInputRef}
        commentSubmitHandler={commentSubmitHandler}
        frequencyHandler={frequencyHandler}
        beNotified={beNotified}
        postId={props.postId}
      />
    </div>
  );
}
