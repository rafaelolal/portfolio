import { useRouter } from "next/router";
import { useRef } from "react";

export default function PostSearch(props) {
  const router = useRouter();

  const searchInputRef = useRef();
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function filterByList(list) {
    router.push({ pathname: "/blog", query: { list: list } }, undefined, {
      shallow: true,
    });
    console.log("CURRENT LIST " + list)
    props.setCurrentList(list);
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
    <div className="row g-2">
      <div className="col">
        <div className="btn-group">
          <button
            onClick={() => filterByList("Featured")}
            type="button"
            className="btn btn-warning"
          >
            See Featured
          </button>
          <button
            type="button"
            className="btn btn-warning dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                onClick={() => filterByList("Projects")}
                className="dropdown-item"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => filterByList("Gym")}
                className="dropdown-item"
              >
                Gym
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInputGrid"
            ref={searchInputRef}
          />
          <label htmlFor="floatingInputGrid">Key words</label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <select
            className="form-select"
            id="floatingSelectGrid"
            ref={yearInputRef}
            onChange={filterBy}
            defaultValue="All years"
          >
            <option value="All years">
              All years
            </option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
          <label htmlFor="floatingSelectGrid">Year</label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <select
            className="form-select"
            id="floatingSelectGrid"
            ref={monthInputRef}
            onChange={filterBy}
            defaultValue="All months"
          >
            <option value="All months">
              All months
            </option>
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
      <div className="col-12">
        <button onClick={filterBy} className="btn btn-primary">
          Search
        </button>
      </div>
    </div>
  );
}
