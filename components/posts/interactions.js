import { useRef } from "react";

export default function Interactions(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const bodyInputRef = useRef();

  function submitComment() {
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const body = bodyInputRef.current.value;
    const postId = props.postId;

    const response = fetch("/api/submitComment", {
      method: "POST",
      body: JSON.stringify({ postId, name, email, body }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      props.showComments();
    });
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
          className="me-1"
        >
          <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
        </svg>
        <small className="text-primary me-3">{props.likes}</small>
        <svg
          length="auto"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          onClick={props.showComments}
          className="me-4"
        >
          <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          length="auto"
          height="30"
          fill="currentColor"
          class="bi bi-share"
          viewBox="0 0 16 16"
        >
          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
        </svg>
      </div>
      <div className="col-6">
        <div class="input-group">
          <input
            type="text"
            class="form-control rounded-5 me-2"
            placeholder="Write a comment..."
            aria-label="Comment"
            aria-describedby="button-addon2"
            ref={bodyInputRef}
          />
          <button
            class="btn btn-secondary rounded-5"
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
                  Leave your contact
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  aria-label="name input"
                  ref={nameInputRef}
                />
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  aria-label="email input"
                  ref={emailInputRef}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={submitComment}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
