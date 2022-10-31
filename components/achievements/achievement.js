export default function Achievement(props) {
  return (
    <div className="accordion-item mb-2">
      <p className="accordion-header fs-2" id={"achievement" + props.id}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#achievementCollapse" + props.id}
          aria-expanded="false"
          aria-controls={"achievementCollapse" + props.id}
        >
          {props.name}
        </button>
      </p>
      <div
        id={"achievementCollapse" + props.id}
        className="accordion-collapse collapse"
        aria-labelledby={"achievement" + props.id}
        data-bs-parent={"#accordionGroup" + props.groupId}
      >
        <div className="accordion-body">
          <p>{props.description}</p>
          <small className="text-primary">{props.year}, {props.month} {props.day}</small>
        </div>
      </div>
    </div>
  );
}
