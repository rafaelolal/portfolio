import Image from "next/image";

import Link from "next/link";

export default function LatestPost(props) {
  return (
    <div id={props.id} className="bg-dark p-3 rounded shadow">
      <div className="vl position-relative ps-2 mx-4">
        <p className="fs-5 badge rounded-5 text-white text-bg-Latest position-absolute top-0 end-0">
          Latest
        </p>
        <p className="text-primary m-0">
          {props.year + ", " + props.month + " " + props.day}
        </p>
        <p className="fw-bold fs-2 mt-3 mb-0">{props.title}</p>
        <p>{props.description.slice(0, props.description.indexOf("."))}...</p>
      </div>

      <div
        id={"carousel" + props.id}
        className="carousel slide card-img-bottom"
      >
        <div className="carousel-inner rounded">
          {props.images.map((imageLink) => (
            <div
              className={
                "carousel-item " + (imageLink == props.images[0] && "active")
              }
              key={imageLink}
            >
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
        <div className="ms-auto">
          <Link href="/posts">
            <a className="btn btn-secondary me-2">Visit</a>
          </Link>
          <Link href="/posts?list=Featured">
            <a className="btn btn-Featured text-white">See Featured</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
