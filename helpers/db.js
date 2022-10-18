import { MongoClient } from "mongodb";

export async function getDBClient() {
  const client = await MongoClient.connect(
    "mongodb+srv://rafaelpbcp:vejsqOpE2lUUVBpq@cluster0.devpukt.mongodb.net/portfolio?retryWrites=true&w=majority"
  );

  return client;
}
