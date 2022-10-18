import { useEffect, useState } from "react";
import Comment from "./comment";

export default function CommentList(props) {
  const { postId } = props;

  const [comments, setComments] = useState();

  useEffect(() => {
    fetch("/api/getComments", {
      method: "POST",
      body: JSON.stringify({ postId }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setComments(data.data);
      });
  }, [props.showingComments]);

  if (!comments) {
    return <p>Loading...</p>;
  }

  console.log("COMMENTS")
  console.log(comments)

  return (
    <div className="row">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      ))}
    </div>
  );
}
