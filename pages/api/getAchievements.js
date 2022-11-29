import { getDBClient } from "../../helpers/db";

export default async function handler(req, res) {
  const client = await getDBClient();
  const collection = client.db().collection("achievements");
  const achievements = await collection.find().sort({ date: -1 }).toArray();

  client.close();

  const data = achievements.map((achievement) => ({
    id: achievement._id.toString(),
    name: achievement.name,
    type: achievement.type,
    description: achievement.description,
    link: achievement.link,
    date: achievement.date,
    issuer: achievement.issuer,
  }));

  res.status(200).json({
    data: data,
  });
}
