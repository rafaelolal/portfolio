export default function CommentModal(props) {
  return (
    <div
      className="modal fade"
      id={"commentModal" + props.postId}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="input-group">
              <span className="input-group-text" id="name-input">
                Name
              </span>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                ref={props.nameInputRef}
                defaultValue={props.name}
              />
            </div>

            <div className="input-group mt-3">
              <span className="input-group-text" id="email-input">
                Email
              </span>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                ref={props.emailInputRef}
                defaultValue={props.email}
              />
            </div>

            {/* <textarea
              className="form-control mt-3"
              ref={props.bodyInputRef}
              defaultValue={props.bodyInputRef.current.value}
            ></textarea> */}
          </div>
          <div className="modal-footer">
            <div className="form-check me-auto">
              <input
                onChange={props.beNotifiedHandler}
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                ref={props.beNotifiedInputRef}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Be notified of new posts
              </label>
            </div>

            <button
              type="button"
              className="btn btn-secondary my-auto text-white"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-success my-auto text-white"
              data-bs-dismiss="modal"
              onClick={props.addComment}
            >
              Submit
            </button>
            {props.beNotified && (
              <div onChange={props.frequencyHandler} className="me-auto">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="dailyRadio"
                    value="Daily"
                  />
                  <label className="form-check-label" htmlFor="dailyRadio">
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
                  <label className="form-check-label" htmlFor="weeklyRadio">
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
                  <label className="form-check-label" htmlFor="monthlyRadio">
                    Monthly
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
