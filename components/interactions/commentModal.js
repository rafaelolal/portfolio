export default function CommentModal(props) {
  function updateCommentBody1() {
    const body2 = document.getElementById("commentBody2" + props.postId);
    const body1 = document.getElementById("commentBody1" + props.postId);
    body1.value = body2.value;
  }

  return (
    <div
      className="modal fade"
      aria-hidden="true"
      id={"commentModal" + props.postId}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <form onSubmit={props.commentSubmitHandler}>
            <div className="modal-body">
              <div className="input-group">
                <span className="input-group-text">Name</span>
                <input
                  type="text"
                  className="form-control"
                  ref={props.nameInputRef}
                  defaultValue={props.name}
                />
              </div>

              <div className="input-group mt-3">
                <span className="input-group-text">Email</span>
                <input
                  type="email"
                  className="form-control"
                  required
                  ref={props.emailInputRef}
                  defaultValue={props.email}
                />
              </div>

              <textarea
                className="form-control mt-3"
                id={"commentBody2" + props.postId}
                required
                onChange={updateCommentBody1}
              ></textarea>
            </div>
            <div className="modal-footer">
              <div className="form-check me-auto">
                <input
                  onChange={props.beNotifiedHandler}
                  className="form-check-input"
                  type="checkbox"
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
                id={"commentModalClose" + props.postId}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-success my-auto text-white"
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
                      required
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
                      required
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
                      required
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
          </form>
        </div>
      </div>
    </div>
  );
}
