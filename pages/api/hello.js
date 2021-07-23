// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

export default async function helloAPI(req, res) {
  const client = new MongoClient(
    "mongodb+srv://<username>:<password>@project0.gz2vh.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  await client.connect();

  const db = client.db("test");

  // const collection = db.collection("categories");

  const categories = await db.collection("categories").find({}).toArray();

  const latestPosts = await db
    .collection("posts")
    .find({})
    .sort({ _id: -1 })
    .limit(10)
    .toArray();

  const featuredPosts = await db
    .collection("posts")
    .find({ isFeaturedPost: true })
    .sort({ _id: -1 })
    .limit(4)
    .toArray();

  client.close();

  res.status(200).json({ categories, latestPosts, featuredPosts });
}
