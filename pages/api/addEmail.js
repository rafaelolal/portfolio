import { getDBClient } from "../../helpers/db";

export default async function handler(req, res) {
  try {
    const { name, email, frequencyValue } = req.body;

    const client = await getDBClient();

    const collection = client.db().collection("emails");
    const result = await collection.insertOne({
      name: name,
      email: email,
      frequency: frequencyValue,
    });

    client.close();

    if (!result.acknowledged || !result.insertedId) {
      res.status(500).json({
        message: "MongoDB insertion error",
        status: 500,
      });
      return;
    }

    res.status(200).json({
      message: "Added to mailing list",
      status: 200,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
}
