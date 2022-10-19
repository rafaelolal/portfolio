import { getDBClient } from "../../helpers/db";

export default async function handler(req, res) {
  const client = await getDBClient();
  const collection = client.db().collection("achievements");
  const achievements = await collection.find().toArray();
  client.close();

  res.status(200).json({
    data: achievements.map((achievement) => ({
      id: achievement.id,
      name: achievement.name,
      description: achievement.description,
      year: achievement.year,
      month: achievement.month,
      day: achievement.date,
      issuer: achievement.issuer,
    })),
  });
}
