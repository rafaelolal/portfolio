import { getDBClient } from "../../helpers/db";

export default async function handler(req, res) {
  const { postId } = req.body;
  const client = await getDBClient();
  const collection = client.db().collection("comments");
  const comments = await collection.find({ postId: postId }).sort({ _id: -1 }).toArray();
  client.close();

  res.status(200).json({
    data: comments.map((comment) => ({
      year: comment.year,
      month: comment.month,
      day: comment.day,
      name: comment.name,
      body: comment.body,
      id: comment._id.toString(),
    })),
  });
}
