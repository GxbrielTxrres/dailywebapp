import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    let data = {
      title: req.body.title,
      post: req.body.post,
      _id: req.body._id,
    };

    const client = await clientPromise;

    const db = await client.db("projects");

    let posts = await db.collection("posts");

    posts.insertOne(data);

    posts = await db.collection("posts").find({}).sort({ _id: -1 }).toArray();
    console.log("posted");
    JSON.parse(JSON.stringify(posts));
    res.status(201).json(posts);
  }
};
