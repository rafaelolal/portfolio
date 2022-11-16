import { getDBClient } from "../../helpers/db";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const { title, list, year, month, day, desc, body, links, images, key } =
        req.body;

      if (key != process.env.POST_KEY) {
        res.status(401).json({ message: "Invalid key", status: 401 });
        return;
      }

      const client = await getDBClient();

      const collection = client.db().collection("posts");
      const result = await collection.insertOne({
        title: title,
        list: list,
        year: year,
        month: month,
        day: day,
        description: desc,
        body: body,
        links: links,
        images: images,
        likes: 0,
        comments: [],
      });

      client.close();

      if (!result.acknowledged || !result.insertedId) {
        res.status(500).json({
          message: "MongoDB insertion error",
          status: 401,
        });

        return;
      }

      res.status(200).json({
        message: "Post added",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error: " + error.message,
        status: 500,
      });
    }
  }
}
