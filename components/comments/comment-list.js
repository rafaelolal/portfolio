import { useEffect, useState } from "react";

import Comment from "./comment";

export default function CommentList(props) {
  const { commentCount, postId } = props;

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
        props.setCommentCount(data.data.length)
        setComments(data.data);
      });
  }, [commentCount, postId]);

  if (!comments) {
    return <p></p>;
  }

  if (commentCount === 0) {
    return <p className="display-6 m-0 mt-3 px-3">Comments (0)</p>;
  }

  return (
    <div className="rounded mt-3 commentShow p-3 pt-0">
      <p className="display-6">Comments ({commentCount})</p>
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
