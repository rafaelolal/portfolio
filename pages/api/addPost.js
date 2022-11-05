import { getDBClient } from "../../helpers/db";

export default async function handler(req, res) {
  const { title, list, year, month, day, desc, body, links, images, key } =
    req.body;

  if (key != "8!L0IdaJOaS7") {
    res.status(401).json({ message: "Invalid key" });
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

  res.status(200).json({
    message: "Post added",
  });
}
