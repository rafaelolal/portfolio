import Link from "next/link";

export default function Home() {
  return (
    <div class="row align-items-center rounded border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">Rafael Almeida</h1>
        <p class="lead">
          Senior at Academy for Information Technology, Scotch Plains
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <Link href="projects"><button
            type="button"
            class="btn btn-dark btn-lg px-4 me-md-2 fw-bold"
          >
            Projects
          </button></Link>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            About
          </button>
        </div>
      </div>
      <div class="col-lg-4 p-0 shadow-lg">
        <img
          class="rounded"
          src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"
          height="300px"
          alt="..."
        />
      </div>
    </div>
  );
}
