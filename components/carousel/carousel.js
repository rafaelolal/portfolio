import CarouselItem from "./carousel-item";

export default function Carousel(props) {
  console.log("carousel props.children")

  console.log(props.children)
  return (
    <div
      id="featuredCarousel"
      className="carousel slide"
    >
      <div className="carousel-inner">
        {props.children}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#featuredCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#featuredCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
