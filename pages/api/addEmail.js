import { getDBClient } from "../../helpers/db";

export default async function handler(req, res) {
  const { name, email, frequencyValue } = req.body;

  const client = await getDBClient();

  const collection = client.db().collection("emails");
  const result = await collection.insertOne({
    name: name,
    email: email,
    frequency: frequencyValue,
  });

  client.close();

  res.status(200).json({
    message: "Email added",
  });
}
