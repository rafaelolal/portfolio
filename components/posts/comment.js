export default function Comment(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.body}</p>
    </div>
  );
}
