import { useRef, useState } from "react";
import { useAppContext } from "../../context/state";

import CommentIcon from "../icons/comment-icon";
import LikeIcon from "../icons/like-icon";
import SendIcon from "../icons/send-icon";
import ShareIcon from "../icons/share-icon";
import CommentModal from "./commentModal";

export default function Interactions(props) {
  const { name, setName, email, setEmail, setShowingToast, setToastStatus } =
    useAppContext();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const bodyInputRef = useRef();
  const beNotifiedInputRef = useRef();
  var frequencyValue;
  const [beNotified, setBeNotified] = useState(false);

  function copyLink() {
    var link = "https://ralmeida.dev/blog/posts#" + props.postId;
    navigator.clipboard.writeText(link);
    setToastStatus({ message: "Link copied!", type: "success" });
    setShowingToast(true);
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

  function addComment() {
    if (name != nameInputRef) {
      setName(nameInputRef.current.value);
    }
    if (email != emailInputRef) {
      setEmail(emailInputRef.current.value);
    }

    const name =
      nameInputRef.current.value.trim() != ""
        ? nameInputRef.current.value
        : "Anonymous";
    const email = emailInputRef.current.value;
    const body = bodyInputRef.current.value;
    const beNotified = beNotifiedInputRef.current.checked;
    const postId = props.postId;

    if (body.trim() == "") {
      setToastStatus({
        message: "You must type a comment!",
        type: "warning",
      });
      setShowingToast(true);
      return;
    }

    const response = fetch("/blog/api/addComment", {
      method: "POST",
      body: JSON.stringify({
        postId,
        name,
        email,
        body,
        frequencyValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      bodyInputRef.current.value = "";
      beNotifiedInputRef.current.checked = false;
      props.showComments();
    });

    if (beNotified) {
      const response = fetch("/blog/api/addEmail", {
        method: "POST",
        body: JSON.stringify({ name, email, frequencyValue }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
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
          ref={bodyInputRef}
        />

        <button
          className="btn btn-secondary text-white ps-2"
          type="button"
          data-bs-toggle="modal"
          style={{
            borderTopRightRadius: "20px 20px",
            borderBottomRightRadius: "20px 20px",
          }}
          data-bs-target={"#commentModal" + props.postId}
        >
          <SendIcon />
        </button>
      </div>

      <CommentModal
        name={name}
        email={email}
        nameInputRef={nameInputRef}
        emailInputRef={emailInputRef}
        bodyInputRef={bodyInputRef}
        beNotifiedHandler={beNotifiedHandler}
        beNotifiedInputRef={beNotifiedInputRef}
        addComment={addComment}
        frequencyHandler={frequencyHandler}
        beNotified={beNotified}
        postId={props.postId}
      />
    </div>
  );
}
