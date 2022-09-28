import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const data = req.body;

      const client = await clientPromise;

      const db = client.db("projects");

      const posts = await db.collection("posts");

      posts.insertOne(data);

      res.json(posts);
    }
    const client = await clientPromise;

    const db = client.db("projects");

    const post = await db.collection("posts").find({}).limit(20).toArray();
    res.json(post);
  } catch (e) {
    console.error(e);
  }
};
