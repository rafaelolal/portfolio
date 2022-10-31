import Image from "next/image";

export default function Carousel(props) {
  return (
    <div
    id={"carousel" + props.postId}
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
            src={"/blog" + imageLink}
            className="d-block w-100"
            alt="..."
            width="100%"
            height="56%"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      ))}
    </div>

    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target={"#carousel" + props.postId}
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
      data-bs-target={"#carousel" + props.postId}
      data-bs-slide="next"
    >
      <span
        className="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}