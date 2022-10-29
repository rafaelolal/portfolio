import { getDBClient } from "../../helpers/db";

export default async function handler(req, res) {
  const { list, search, year, month } = req.body;

  const client = await getDBClient();
  const collection = client.db().collection("posts");

  let filters = {};
  list && (filters.list = list);
  search &&
    (filters.$or = [
      {
        title: { $regex: search },
      },
      { description: { $regex: search } },
      { body: { $regex: search } },
    ]);
  year && (filters.year = year);
  month && (filters.month = month);

  const posts = await collection.find(filters).sort({_id:-1}).toArray();
  client.close();

  if (!posts || posts.length === 0) {
    res.status(404).json({ message: "No posts found" });
  } else {
    res.status(200).json({
      data: posts.map((post) => ({
        list: post.list,
        title: post.title,
        year: post.year,
        month: post.month,
        day: post.day,
        description: post.description,
        body: post.body,
        links: post.links,
        images: post.images,
        likes: post.likes,
        comments: post.comments,
        id: post._id.toString(),
      })),
    });
  }
}
