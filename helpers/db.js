import { MongoClient } from "mongodb";

export async function getDBClient() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.devpukt.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  );

  return client;
}
