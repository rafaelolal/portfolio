import { getDBClient } from "../../helpers/db";

export default async function handler(req, res) {
  const { postId } = req.body;
  const client = await getDBClient();
  const collection = client.db().collection("comments");
  const comments = await collection.find({ postId: postId }).toArray();
  client.close();

  res.status(200).json({
    data: comments.map((comment) => ({
      name: comment.name,
      email: comment.email,
      body: comment.body,
      id: comment._id.toString(),
    })),
  });
}
