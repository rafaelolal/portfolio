export default function Achievement(props) {
  return (
    <div className="accordion-item mb-2">
      <h2 className="accordion-header" id={"flush-" + props.id}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#flush-collapse" + props.id}
          aria-expanded="false"
          aria-controls={"flush-collapse" + props.id}
        >
          {props.name}
        </button>
      </h2>
      <div
        id={"flush-collapse" + props.id}
        className="accordion-collapse collapse"
        aria-labelledby={"flush-" + props.id}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <p>{props.description}</p>
          {props.year}, {props.month} {props.day}
        </div>
      </div>
    </div>
  );
}
