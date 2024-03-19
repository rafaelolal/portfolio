import Image from "next/future/image";

export default function Carousel(props) {
  return (
    <>
      <div
        className="modal fade"
        id={"carouselModal" + props.postId}
        tabIndex="-1"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ maxWidth: "fit-content" }}
        >
          <div
            className="modal-content"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <div className="modal-body">
              <div
                id={"carousel2" + props.postId}
                className="carousel slide card-img-bottom"
              >
                <div className="carousel-inner rounded">
                  {props.images.map((imageLink) => (
                    <div
                      className={
                        "carousel-item " +
                        (imageLink == props.images[0] && "active")
                      }
                      key={imageLink}
                    >
                      <img
                        className="img-fluid"
                        src={"/blog" + imageLink}
                        alt="hi alt"
                        style={{ maxWidth: "90vw", maxHeight: "90vh" }}
                      />
                    </div>
                  ))}
                </div>

                {props.images.length > 1 && (
                  <>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={"#carousel2" + props.postId}
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
                      data-bs-target={"#carousel2" + props.postId}
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="carousel slide card-img-bottom mt-3"
        id={"carousel1" + props.postId}
      >
        <div
          className="carousel-inner"
          data-bs-toggle="modal"
          data-bs-target={"#carouselModal" + props.postId}
        >
          {props.images.map((imageLink) => (
            <div
              className={
                "carousel-item " + (imageLink == props.images[0] && "active")
              }
              key={imageLink}
              style={{ height: "50vh" }}
            >
              <Image
                src={"/blog" + imageLink}
                alt="hi alt 2"
                style={{ objectFit: "cover" }}
                fill
                placeholder="blur"
                blurDataURL="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
              />
            </div>
          ))}
        </div>

        {props.images.length > 1 && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={"#carousel1" + props.postId}
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
              data-bs-target={"#carousel1" + props.postId}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>
    </>
  );
}
