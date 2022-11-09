import Link from "next/link";
import Carousel from "./carousel";

export default function LatestPost(props) {
  return (
    <div
      className="bg-dark py-3 rounded shadow"
      id={props.id}
    >
      <div className="vl ps-2 mx-3">
        <div className="d-flex justify-content-between">
          <p className="text-primary m-0">
            {props.year + ", " + props.month + " " + props.day}
          </p>
          <span
            className="badge fs-5 rounded-5 text-white bg-Latest"
            onClick={() => {
              filterByList(props.list);
            }}
          >
            {props.list}
          </span>
        </div>

        <p className="fw-bold fs-3 mb-0">{props.title}</p>
        <p>{props.description.slice(0, props.description.indexOf("."))}...</p>
      </div>

      {props.images && props.images.length > 0 && (
        <Carousel postId={props.id} images={props.images} />
      )}

      <div className="mt-3 d-flex pe-3">
        <div className="ms-auto">
          <Link href="/posts">
            <a className="btn btn-secondary me-2 text-white">Visit</a>
          </Link>
          <Link href="/posts?list=Featured">
            <a className="btn btn-Featured text-white">See Featured</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
