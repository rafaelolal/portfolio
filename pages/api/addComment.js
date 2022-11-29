import { ObjectId } from "mongodb";
import { getDBClient } from "../../helpers/db";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const { postId, name, email, date, body } = req.body;

      const client = await getDBClient();

      const commentsCollection = client.db().collection("comments");
      const commentResult = await commentsCollection.insertOne({
        name: name,
        email: email,
        body: body,
        date: date,
        postId: postId,
      });

      const postsCollection = client.db().collection("posts");
      const postResult = await postsCollection.update(
        { _id: ObjectId(postId) },
        { $push: { comments: commentResult.insertedId.toString() } }
      );

      client.close();

      if (
        !commentResult.acknowledged ||
        !commentResult.insertedId ||
        !postResult.acknowledged
      ) {
        res.status(500).json({
          message: "MongoDB insertion error",
          status: 500,
        });
        return;
      }

      res.status(200).json({
        message: "Comment submitted",
        status: 200,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error: " + error.message,
        status: 500,
      });
    }
  }
}
