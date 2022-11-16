import { useRef, useState } from "react";
import { useAppContext } from "../context/state";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function NewPostPage() {
  const { setToast } = useAppContext();

  const titleRef = useRef();
  const yearRef = useRef();
  const dayRef = useRef();
  const descRef = useRef();
  const bodyRef = useRef();
  const keyRef = useRef();
  const [listSelected, setListSelected] = useState("General");

  const date = new Date();
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const [monthSelected, setMonthSelected] = useState(month);

  const [linkCount, setLinkCount] = useState(1);
  const [imageCount, setImageCount] = useState(1);

  function addLink() {
    setLinkCount(linkCount + 1);
  }

  function removeLink() {
    const input = document.getElementById("link" + (linkCount - 2));
    if (linkCount > 1 && input.value == "") {
      setLinkCount(linkCount - 1);
    }
  }

  function addImage() {
    setImageCount(imageCount + 1);
  }

  function removeImage() {
    const image = document.getElementById("image" + (imageCount - 2));
    if (imageCount > 1 && image.value == "") {
      setImageCount(imageCount - 1);
    }
  }

  function postSubmitHandler(event) {
    event.preventDefault();

    const links = document.getElementsByClassName("linkInput");
    const linkValues = [];
    for (let link of links) {
      if (link.value !== "") {
        linkValues.push(link.value);
      }
    }

    const imageValues = [];
    const images = document.getElementsByClassName("imageInput");
    for (let image of images) {
      if (image.value !== "") {
        imageValues.push(image.value);
      }
    }

    fetch("/blog/api/addPost", {
      method: "POST",
      body: JSON.stringify({
        title: titleRef.current.value,
        list: listSelected,
        year: yearRef.current.value,
        month: monthSelected,
        day: dayRef.current.value,
        desc: descRef.current.value,
        body: bodyRef.current.value,
        links: linkValues,
        images: imageValues,
        key: keyRef.current.value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setToast(data)

        if ([401, 500].includes(data.status)) {
          return;
        }

        titleRef.current.value = "";
        yearRef.current.value = year;
        dayRef.current.value = day;
        descRef.current.value = "";
        bodyRef.current.value = "";
        setLinkCount(1);
        document.getElementsByClassName("linkInput")[0].value = "";
        setImageCount(1);
        document.getElementsByClassName("imageInput")[0].value = "";
        setListSelected("General");
        setMonthSelected(month);
      });
  }

  return (
    <form className="container" onSubmit={postSubmitHandler}>
      <div className="input-group mt-5">
        <span className="input-group-text">Title</span>
        <input className="form-control" required ref={titleRef} />
      </div>

      <div className="row mt-2 g-1">
        <div className="col-6 col-md-3">
          <select
            className="form-select"
            defaultChecked="General"
            onChange={(e) => {
              setListSelected(e.target.value);
            }}
          >
            <option value="General">General</option>
            <option value="Featured">Featured</option>
            <option value="Achievement">Achievement</option>
            <option value="Gym">Gym</option>
            <option value="Project">Project</option>
          </select>
        </div>

        <div className="col-6 col-md-3">
          <div className="input-group">
            <span className="input-group-text">Year</span>
            <input
              type="number"
              className="form-control"
              required
              defaultValue={year}
              ref={yearRef}
            />
          </div>
        </div>

        <div className="col-6 col-md-3">
          <select
            className="form-select"
            id="monthSelect"
            defaultValue={monthSelected}
            onChange={(e) => {
              setMonthSelected(e.target.value);
            }}
          >
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>

        <div className="col-6 col-md-3">
          <div className="input-group">
            <span className="input-group-text">Day</span>
            <input
              type="number"
              className="form-control"
              required
              defaultValue={day}
              ref={dayRef}
            />
          </div>
        </div>
      </div>

      <div className="input-group mt-2">
        <span className="input-group-text">Desc</span>
        <textarea className="form-control" required ref={descRef} />
      </div>

      <div className="input-group mt-2">
        <span className="input-group-text">Body</span>
        <textarea className="form-control" ref={bodyRef} />
      </div>

      <div className="row mt-1 g-1">
        <div className="col">
          <p className="mb-0">Links</p>
          {[...Array(linkCount)].map((e, i) => (
            <input
              key={i}
              type="url"
              className="form-control mt-1 linkInput"
              id={"link" + i}
              onChange={
                i >= linkCount - 2
                  ? i == linkCount - 2
                    ? removeLink
                    : addLink
                  : undefined
              }
            />
          ))}
        </div>

        <div className="col">
          <p className="mb-0">Images</p>
          {[...Array(imageCount)].map((e, i) => (
            <input
              key={i}
              type="text"
              className="form-control mt-1 imageInput"
              id={"image" + i}
              onChange={
                i >= imageCount - 2
                  ? i == imageCount - 2
                    ? removeImage
                    : addImage
                  : undefined
              }
            />
          ))}
        </div>
      </div>

      <div className="input-group mt-2">
        <span className="input-group-text">Key</span>
        <input type="password" className="form-control" required ref={keyRef} />
      </div>

      <button type="submit" className="btn btn-primary text-white mt-2">
        Post
      </button>
    </form>
  );
}
