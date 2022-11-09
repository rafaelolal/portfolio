import { useRef } from "react";
import { useAppContext } from "../../context/state";

export default function EmailMe() {
  const { name, setName, email, setEmail, setShowingToast, setToastStatus } =
    useAppContext();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const bodyInputRef = useRef();

  function addMessage() {
    fetch("/blog/api/addMessage", {
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
          setToastStatus({ message: "Message sent!", type: "success" });
          setShowingToast(true);
          bodyInputRef.current.value = "";
        }
        if (name != nameInputRef.current.value) {
          setName(nameInputRef.current.value);
        }
        if (email != emailInputRef.current.value) {
          setEmail(emailInputRef.current.value);
        }
      });
  }

  return (
    <nav className="navbar ms-auto">
      <div className="container-fluid">
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#emailMeModal"
          style={{ border: "#da1e19 solid"}}
          className="ms-2 p-1 fw-bold bg-white shadow-sm"
        >
          EMAIL ME
        </button>

        <div
          className="modal fade"
          id="emailMeModal"
          aria-labelledby="emailMeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="name-input">
                    Name
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="name-input"
                    ref={nameInputRef}
                    defaultValue={name}
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
                    defaultValue={email}
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
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary text-white"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={addMessage}
                  type="button"
                  className="btn btn-success text-white"
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
