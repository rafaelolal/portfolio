import { ObjectId } from "mongodb";
import { getDBClient } from "../../helpers/db";

export default async function handler(req, res) {
  const { postId } = req.body;

  const client = await getDBClient();

  const collection = client.db().collection("posts");
  const result = await collection.update(
    { _id: ObjectId(postId) },
    { $inc: { likes: 1 } }
  );

  client.close();

  res.status(200).json({
    message: "Like added",
  });
}
