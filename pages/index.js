// import { Carousel } from "";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/getPosts", {
      method: "POST",
      body: JSON.stringify({ list: "Featured" }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row align-items-center rounded border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">Rafael Almeida</h1>
            <p className="lead">
              Senior at Academy for Information Technology, Scotch Plains
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <Link href="projects">
                <a
                  className="btn btn-dark btn-lg px-4 me-md-2 fw-bold"
                >
                  Projects
                </a>
              </Link>
              <Link href="about">
                <a
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  About
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 p-0 shadow-lg">
            <img
              className="rounded"
              src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"
              height="300px"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div class="bg-dark mt-5"></div>
    </div>
  );
}
