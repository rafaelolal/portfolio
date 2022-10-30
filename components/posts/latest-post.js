import Image from "next/image";

import Link from "next/link";

export default function LatestPost(props) {
  return (
    <div
      id={props.id}
      className="bg-dark p-3 rounded"
    >
      <div className="vl position-relative ps-2 mx-4">
        <small className="text-primary">
          {props.year + ", " + props.month + " " + props.day}
        </small>
        <div>
          <h2 className="fw-bold">{props.title}</h2>
          <h2>
            <span className="badge rounded-5 text-bg-primary position-absolute top-0 end-0">
              {props.list}
            </span>
          </h2>
        </div>
        <p>{props.description.slice(0, props.description.indexOf("."))}...</p>
      </div>

      <div
        id={"carousel" + props.id}
        className="carousel slide card-img-bottom"
      >
        <div className="carousel-inner rounded">
          {props.images.map((imageLink) => (
            <div className="carousel-item active">
              <Image
                src={imageLink}
                className="d-block w-100"
                alt="..."
                height="56%"
                width="100%"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={"#carousel" + props.id}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={"#carousel" + props.id}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="mt-3 d-flex">
        <Link href="posts">
          <a className="btn btn-secondary ms-auto">Visit</a>
        </Link>
      </div>
    </div>
  );
}
