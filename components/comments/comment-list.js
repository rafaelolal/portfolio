import { useEffect, useState } from "react";

import Comment from "./comment";

export default function CommentList(props) {
  const { postId } = props;

  const [comments, setComments] = useState();

  useEffect(() => {
    fetch("/blog/api/getComments", {
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
  }, [props.showingComments, postId]);

  if (!comments) {
    return <p></p>;
  }

  if (comments.length === 0) {
    return <p className="display-6 mt-3">Comments (0)</p>;
  }

  return (
    <div className="rounded mt-3 commentShow" style={{ height: 300, overflow: "auto" }}>
      <p className="display-6">Comments ({comments.length})</p>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          body={comment.body}
          year={comment.year}
          month={comment.month}
          day={comment.day}
        />
      ))}
    </div>
  );
}
