import { ObjectId } from "mongodb";
import { getDBClient } from "../../helpers/db";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default async function handler(req, res) {
  const { postId, name, email, body } = req.body;

  const client = await getDBClient();
  
  const date = new Date();

  const commentsCollection = client.db().collection("comments");
  const commentResult = await commentsCollection.insertOne({
    name: name,
    email: email,
    body: body,
    postId: postId,
    year: date.getFullYear(),
    month: monthNames[date.getMonth()],
    day: date.getDate(),
  });

  const postsCollection = client.db().collection("posts");
  const postResult = await postsCollection.update(
    { _id: ObjectId(postId) },
    { $push: { comments: commentResult.insertedId.toString() } }
  );

  client.close();

  res.status(200).json({
    message: "Comment submitted",
  });
}
