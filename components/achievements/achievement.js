import LinkIcon from "../icons/link-icon";

export default function Achievement(props) {
  const achievementDate = new Date(props.date);

  return (
    <div className="accordion-item mt-3 border rounded">
      <p className="accordion-header fs-2" id={"achievement" + props.id}>
        <button
          className="accordion-button rounded collapsed"
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
          <p className="fw-bold">{props.issuer}</p>
          <p>{props.description}</p>
          <small className="text-primary">
            {props.link && <LinkIcon link={props.link} />}
            {achievementDate.toLocaleString(undefined, {
              timeZone: "UTC",
              year: "numeric",
              month: "long",
              day: "2-digit",
              weekday: "long",
            })}
          </small>
        </div>
      </div>
    </div>
  );
}
