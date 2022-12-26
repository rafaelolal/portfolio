import { useRef } from "react";

import { useAppContext } from "../../context/state";

export default function AchievementForm() {
  const date = new Date().toLocaleDateString("en-CA");

  const { setToast } = useAppContext();

  const nameRef = useRef();
  const typeRef = useRef();
  const dateRef = useRef();
  const descRef = useRef();
  const linkRef = useRef();
  const issuerRef = useRef();
  const keyRef = useRef();

  function achievementSubmitHandler(event) {
    event.preventDefault();

    fetch("/blog/api/addAchievement", {
      method: "POST",
      body: JSON.stringify({
        name: nameRef.current.value,
        type: typeRef.current.value,
        date: dateRef.current.value,
        desc: descRef.current.value,
        link: linkRef.current.value,
        issuer: issuerRef.current.value,
        key: keyRef.current.value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setToast(data);

        if ([401, 500].includes(data.status)) {
          return;
        }

        nameRef.current.value = "";
        dateRef.current.value = date;
        descRef.current.value = "";
        linkRef.current.value = "";
        issuerRef.current.value = "";
      });
  }

  return (
    <>
      <div className="blogfolio my-5">
        <p>ACHIEVEMENTS</p>
      </div>

      <form className="mb-5" onSubmit={achievementSubmitHandler}>
        <div className="row g-1 mt-1">
          <div className="col-12 col-md-6">
            <div className="input-group">
              <span className="input-group-text">Name</span>
              <input className="form-control" required ref={nameRef} />
            </div>
          </div>

          <div className="col-6 col-md-3">
            <select
              className="form-select"
              defaultChecked="General"
              ref={typeRef}
            >
              <option value="General">General</option>
              <option value="Achievement">Achievement</option>
              <option value="Award">Award</option>
              <option value="Certificate">Certificate</option>
              <option value="Course">Course</option>
            </select>
          </div>

          <div className="col-6 col-md-3">
            <input
              type="date"
              defaultValue={date}
              className="form-control"
              required
              ref={dateRef}
            />
          </div>
        </div>

        <div className="input-group mt-2">
          <span className="input-group-text">Desc</span>
          <textarea className="form-control" required ref={descRef} />
        </div>

        <div className="row g-1">
          <div className="col-6 col-md-4">
            <div className="input-group mt-2">
              <span className="input-group-text">Link</span>
              <input className="form-control" ref={linkRef} />
            </div>
          </div>

          <div className="col-6 col-md-4">
            <div className="input-group mt-2">
              <span className="input-group-text">Issuer</span>
              <input className="form-control" required ref={issuerRef} />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="input-group mt-2">
              <span className="input-group-text">Key</span>
              <input
                type="password"
                className="form-control"
                required
                ref={keyRef}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary text-white mt-2">
          Submit
        </button>
      </form>
    </>
  );
}
