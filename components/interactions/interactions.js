import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../context/state";

import CommentIcon from "../icons/comment-icon";
import LikeIcon from "../icons/like-icon";
import ShareIcon from "../icons/share-icon";
import CommentModal from "./commentModal";

export default function Interactions(props) {
  const { name, setName, email, setEmail } = useAppContext();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const bodyInputRef = useRef();
  const beNotifiedInputRef = useRef();
  var frequencyValue;
  const [beNotified, setBeNotified] = useState(false);

  const { isShowingCopy, setIsShowingCopy } = props;

  useEffect(() => {
    if (isShowingCopy) {
      const timer = setTimeout(() => {
        setIsShowingCopy(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isShowingCopy, setIsShowingCopy]);

  function copyLink() {
    var link = "https://ralmeida.dev/blog/posts#" + props.postId;
    navigator.clipboard.writeText(link);
    props.setIsShowingCopy(true);
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
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const body = bodyInputRef.current.value;
    const beNotified = beNotifiedInputRef.current.checked;
    const postId = props.postId;

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
      if (name != nameInputRef) {
        setName(nameInputRef.current.value);
      }
      if (email != emailInputRef) {
        setEmail(emailInputRef.current.value);
      }
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
    <div className="row">
      <div className="col-12 col-md-4 d-flex mt-1">
        <div className="mx-auto">
          <LikeIcon onClick={props.addLike} />
          <small className="text-primary me-2 fs-7">{props.likes}</small>

          <CommentIcon onClick={props.showComments} />
          <small className="text-primary me-3 fs-7">{props.commentCount}</small>

          <ShareIcon onClick={copyLink} />
        </div>
      </div>

      <div className="col-12 col-md-8 mt-1">
        <div className="input-group">
          <input
            type="text"
            className="form-control rounded-5 me-2"
            placeholder="Write a comment..."
            aria-label="Comment"
            ref={bodyInputRef}
          />
          <button
            className="btn btn-secondary rounded-5"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={"#commentModal" + props.postId}
          >
            Submit
          </button>

          <CommentModal
            name={name}
            email={email}
            nameInputRef={nameInputRef}
            emailInputRef={emailInputRef}
            beNotifiedHandler={beNotifiedHandler}
            beNotifiedInputRef={beNotifiedInputRef}
            addComment={addComment}
            frequencyHandler={frequencyHandler}
            beNotified={beNotified}
            postId={props.postId}
          />
        </div>
      </div>
    </div>
  );
}
