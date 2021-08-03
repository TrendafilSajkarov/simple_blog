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

  const category = await db
    .collection("categories")
    .find({ slug: req.query.category })
    .toArray();

  const posts = await db
    .collection("posts")
    .find({ fromCategory: category[0]._id })
    .sort({ _id: -1 })
    .limit(10)
    .toArray();

  client.close();

  res.status(200).json({ posts, category });
}
