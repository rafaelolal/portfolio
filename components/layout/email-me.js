import { useEffect, useRef, useState } from "react";

export default function EmailMe() {
  const [isShowingEmail, setIsShowingEmail] = useState(false);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const bodyInputRef = useRef();

  useEffect(() => {
    if (isShowingEmail) {
      const timer = setTimeout(() => {
        setIsShowingEmail(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isShowingEmail, setIsShowingEmail]);

  function addMessage() {
    fetch("api/addMessage", {
      method: "PATCH",
      body: JSON.stringify({
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        body: bodyInputRef.current.value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Message added") {
          setIsShowingEmail(true);
          nameInputRef.current.value = ""
          emailInputRef.current.value = ""
          bodyInputRef.current.value = ""
        }
      });
  }

  return (
    <nav className="navbar ms-auto">
      {isShowingEmail && (
        <p
          className="myToast"
        >
          Message sent!
        </p>
      )}
      <div className="container-fluid">
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#emailMeModal"
          style={{ borderStyle: "solid", borderColor: "#da1e19" }}
          className="navbar-brand ms-2 p-1 fw-bold bg-white"
        >
          EMAIL ME
        </button>

        <div
          class="modal fade"
          id="emailMeModal"
          tabindex="-1"
          aria-labelledby="emailMeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="name-input">
                    Name
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="name-input"
                    ref={nameInputRef}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="email-input">
                    Email
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="email-input"
                    ref={emailInputRef}
                  />
                </div>
                <div className="input-group">
                  <textarea
                    type="text"
                    className="form-control"
                    ref={bodyInputRef}
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={addMessage}
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
