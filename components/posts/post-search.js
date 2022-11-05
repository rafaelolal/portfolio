import { useRouter } from "next/router";
import { useRef } from "react";

export default function PostSearch(props) {
  const router = useRouter();

  const searchInputRef = useRef();
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function filterByList(list) {
    router.push({ pathname: "", query: { list: list } }, undefined, {
      shallow: true,
    });
    props.setCurrentList(list);
  }

  function clearSearch() {
    props.setCurrentSearch("");
    searchInputRef.current.value = "";
  }

  function filterBy() {
    props.setCurrentSearch(searchInputRef.current.value.trim());

    if (yearInputRef.current.value.includes("All")) {
      props.setCurrentYear();
    } else {
      props.setCurrentYear(yearInputRef.current.value);
    }
    if (monthInputRef.current.value.includes("All")) {
      props.setCurrentMonth();
    } else {
      props.setCurrentMonth(monthInputRef.current.value);
    }
  }

  return (
    <div className="row mt-5 gx-3">
      <div className="col-12 col-md-4 mb-3">
        <div className="input-group h-100">
          {searchInputRef.current && searchInputRef.current.value && (
            <button className="btn btn-secondary" onClick={clearSearch}>
              Clear
            </button>
          )}
          <input
            type="email"
            className="form-control"
            placeholder="Key words..."
            ref={searchInputRef}
          />
          <button className="btn btn-primary text-white" onClick={filterBy}>
            Search
          </button>
        </div>
      </div>
      <div className="col-6 col-md-4 mb-3">
        <div className="col-md">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelectGrid"
              ref={yearInputRef}
              onChange={filterBy}
              defaultValue="All years"
            >
              <option value="All years">All years</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
            <label htmlFor="floatingSelectGrid">Year</label>
          </div>
        </div>
      </div>

      <div className="col-6 col-md-4 mb-3">
        <div className="form-floating">
          <select
            className="form-select"
            id="floatingSelectGrid"
            ref={monthInputRef}
            onChange={filterBy}
            defaultValue="All months"
          >
            <option value="All months">All months</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <label htmlFor="floatingSelectGrid">Month</label>
        </div>
      </div>
      <div className="col-6 col-lg-4 mb-3 mx-auto justify-content-center d-flex">
        <div className="btn-group dropend">
          <button
            onClick={() => filterByList("Featured")}
            type="button"
            className="btn btn-Featured"
          >
            <p className="fs-5 m-0 text-white">See Featured</p>
          </button>
          <button
            type="button"
            className="btn btn-dark dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                onClick={() => filterByList("Project")}
                className="dropdown-item fs-4"
              >
                Project
              </a>
            </li>
            <li>
              <a
                onClick={() => filterByList("Gym")}
                className="dropdown-item fs-4"
              >
                Gym
              </a>
            </li>
            <li>
              <a
                onClick={() => filterByList("Achievement")}
                className="dropdown-item fs-4"
              >
                Achievement
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
