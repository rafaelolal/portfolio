import { useEffect, useState } from "react";

import Comment from "./comment";

export default function CommentList(props) {
  const { commentCount, setCommentCount, postId } = props;

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
        setCommentCount(data.data.length)
        setComments(data.data);
      });
  }, [commentCount, setCommentCount, postId]);

  if (!comments) {
    return <p className="m-0 mt-3 px-3 commentShow">Loading...</p>;
  }

  if (commentCount === 0) {
    return <p className="display-6 m-0 mt-3 px-3 commentShow">Comments (0)</p>;
  }

  return (
    <div className="rounded mt-3 commentShow px-3 pt-0">
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
