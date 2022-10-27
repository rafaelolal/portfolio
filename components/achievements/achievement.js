export default function Achievement(props) {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id={"flush-" + props.id}>
        <button
          class="accordion-button collapsed"
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
        class="accordion-collapse collapse"
        aria-labelledby={"flush-" + props.id}
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <div class="card">
            <div class="card-header">{props.issuer}</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>{props.description}</p>
                <footer class="blockquote-footer">{props.year}, {props.month} {props.day}</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
