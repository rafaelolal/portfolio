export default function Comment(props) {
  const commentDate = new Date(props.date);

  return (
    <div className="bg-white rounded p-3 mt-3">
      <small className="fw-bold">{props.name}</small>
      <small className="text-primary fs-7">
        {" "}
        •{" "}
        {commentDate.toLocaleString(undefined, {
          timeZone: "UTC",
          year: "numeric",
          month: "long",
          day: "2-digit",
          weekday: "long",
        })}
      </small>
      <p>{props.body}</p>
    </div>
  );
}
