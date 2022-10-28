export default function Comment(props) {
  return (
    <div className="bg-white mb-3 rounded p-3 m-1">
      <small className="fw-bold fs-4">{props.name}</small>
      <small className="text-primary fs-7">
        • {props.year}, {props.month} {props.day}
      </small>
      <p>{props.body}</p>
    </div>
  );
}
