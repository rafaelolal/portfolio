import { useEffect, useRef, useState } from "react";

export default function Interactions(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const bodyInputRef = useRef();
  const beNotifiedInputRef = useRef();
  var frequencyValue;
  const [beNotified, setBeNotified] = useState(false);

  const {isShowingCopy, setIsShowingCopy} = props

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
    var link = "https://ralmeida.dev/blog#" + props.postId;
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

  function submitComment() {
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const body = bodyInputRef.current.value;
    const beNotified = beNotifiedInputRef.current.checked;
    const postId = props.postId;
    console.log("beNotified");
    console.log(beNotified);
    console.log("frequency");
    console.log(frequencyValue);

    const response = fetch("/api/submitComment", {
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
      nameInputRef.current.value = "";
      emailInputRef.current.value = "";
      bodyInputRef.current.value = "";
      beNotifiedInputRef.current.checked = false;
      props.showComments();
    });

    if (beNotified) {
      const response = fetch("/api/addEmail", {
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
      <div className="col-6">
        <svg
          length="auto"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          onClick={props.addLike}
          className="me-2"
        >
          <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
        </svg>
        <small className="text-primary me-2 fs-6">{props.likes}</small>
        <svg
          length="auto"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          onClick={props.showComments}
          className=""
        >
          <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z" />
        </svg>
        <small className="text-primary me-3 fs-6">{props.commentCount}</small>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          length="auto"
          height="30"
          className="bi bi-share"
          viewBox="0 0 16 16"
          onClick={copyLink}
        >
          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
        </svg>
      </div>
      <div className="col-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control rounded-5 me-2"
            placeholder="Write a comment..."
            aria-label="Comment"
            aria-describedby="button-addon2"
            ref={bodyInputRef}
          />
          <button
            className="btn btn-secondary rounded-5"
            type="button"
            id="button-addon2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Submit
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  LEAVE YOUR CONTACT
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="name-input">
                    Name
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="name-input"
                    ref={nameInputRef}
                  />
                </div>
                <div className="input-group mb-1">
                  <span className="input-group-text" id="email-input">
                    Email
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="email-input"
                    ref={emailInputRef}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <div className="form-check me-auto">
                  <input
                    onChange={beNotifiedHandler}
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    ref={beNotifiedInputRef}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Be notified of new posts
                  </label>
                </div>

                <button
                  type="button"
                  className="btn btn-secondary my-auto"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success my-auto"
                  data-bs-dismiss="modal"
                  onClick={submitComment}
                >
                  Submit
                </button>
                {beNotified && (
                  <div onChange={frequencyHandler} className="me-auto">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="dailyRadio"
                        value="Daily"
                      />
                      <label className="form-check-label" for="dailyRadio">
                        Daily
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="weeklyRadio"
                        value="Weekly"
                      />
                      <label className="form-check-label" for="weeklyRadio">
                        Weekly
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="monthlyRadio"
                        value="Monthly"
                      />
                      <label className="form-check-label" for="monthlyRadio">
                        Monthly
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
