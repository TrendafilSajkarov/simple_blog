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

  const allPosts = await db.collection("posts").find({}).toArray();

  client.close();

  res.status(200).json({ allPosts });
}
