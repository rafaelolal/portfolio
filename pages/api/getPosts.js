import { getDBClient } from "../../helpers/db";

export async function getPosts(reqBody) {
  const { list, search, year, month } = reqBody;

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

  const posts = await collection.find(filters).sort({ _id: -1 }).toArray();
  client.close();

  if (!posts || posts.length === 0) {
    return { message: "No posts found" };
  } else {
    return {
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
    };
  }
}

export default async function handler(req, res) {
  const response = await getPosts(req.body);
  if (response.message == "No posts found") {
    res.status(404).json(response);
  } else {
    res.status(200).json(response);
  }
}
