import { getDBClient } from "../../helpers/db";

export default async function handler(req, res) {
  const client = await getDBClient();
  const collection = client.db().collection("comments");

  const { postId } = req.body;
  const comments = await collection
    .find({ postId: postId })
    .sort({ date: -1 })
    .toArray();
  
    client.close();

  res.status(200).json({
    data: comments.map((comment) => ({
      id: comment._id.toString(),
      name: comment.name,
      body: comment.body,
      date: comment.date,
    })),
  });
}
