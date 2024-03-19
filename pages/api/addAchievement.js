import { getDBClient } from "../../helpers/db";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const { name, type, date, desc, link, issuer, key } = req.body;

      if (key != process.env.POST_KEY) {
        res.status(401).json({ message: "Invalid key", status: 401 });
        return;
      }

      const client = await getDBClient();

      const collection = client.db().collection("achievements");
      const result = await collection.insertOne({
        name: name,
        type: type,
        date: new Date(date),
        description: desc,
        link: link,
        issuer: issuer,
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
        message: "Achievement added",
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
