import { MongoClient } from "mongodb";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const client = await MongoClient.connect(
  `mongodb+srv://rafaelpbcp:vejsqOpE2lUUVBpq@cluster0.devpukt.mongodb.net/portfolio?retryWrites=true&w=majority`
);

const collection = client.db().collection("comments");

const posts = await collection.find();

posts.forEach((item) => {
  collection
    .updateOne(
      { _id: item._id },
      {
        $unset: { day: "", month: "", year: "" },
        $set: {
          date: new Date(
            `${item.year}-${monthNames.indexOf(item.month) + 1}-${item.day}`
          ),
        },
      }
    )
    .then((result) => console.log(result));
});