import { getDBClient } from "../../helpers/db";

export default async function handler(req, res) {
  const client = await getDBClient();
  const collection = client.db().collection("achievements");
  const achievements = await collection.find().toArray();
  client.close();

  const data = achievements.map((achievement) => ({
    id: achievement._id.toString(),
    name: achievement.name,
    description: achievement.description,
    year: achievement.year,
    month: achievement.month,
    day: achievement.date,
    issuer: achievement.issuer,
  }));

  var sorted = {};

  for (let i = 0; i < data.length; i++) {
    var item = data[i];
    if (!(item.issuer in sorted)) {
      sorted[item.issuer] = [];
      sorted[item.issuer].push(item);
      continue;
    }
    sorted[item.issuer].push(item);
  }

  var l = [];
  var id = 1;
  for (var key in sorted) {
    l.push({ name: key, achievements: sorted[key], id: id });
    id = id + 1
  }

  res.status(200).json({
    data: l,
  });
}
