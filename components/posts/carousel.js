import Image from "next/image";

export default function Carousel(props) {
  return (
    <>
      <div
        class="modal fade"
        id={"carouselModal" + props.postId}
        tabIndex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" style={{maxWidth: "fit-content"}}>
          <div class="modal-content">
            <div class="modal-body">
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
                        src={"/blog" + imageLink}
                        alt="..."
                        className="img-fluid"
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
        className="carousel slide card-img-bottom"
        id={"carousel1" + props.postId}
      >
        <div
          className="carousel-inner rounded"
          data-bs-toggle="modal"
          data-bs-target={"#carouselModal" + props.postId}
        >
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
