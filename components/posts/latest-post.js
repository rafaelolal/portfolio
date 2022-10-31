import Link from "next/link";
import Carousel from "./carousel";

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

      {(props.images || props.images.length > 0) && (
        <Carousel
          postId={props.id}
          images={props.images}
        />
      )}

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
