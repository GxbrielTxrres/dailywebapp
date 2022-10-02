import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

const postId = async (req, res) => {
  const { postId } = req.query;

  const client = await clientPromise;

  const db = await client.db("projects");

  let posts = await db.collection("posts");

  if (req.method === "DELETE") {
    await posts.deleteOne({ _id: ObjectId(postId) });

    posts = await db.collection("posts").find({}).sort({ _id: -1 }).toArray();

    console.log("POSTS AFTER:", posts);

    return res.status(200).json(posts);
  }

  posts = await db.collection("posts").find({}).toArray();

  return res.status(200).json(posts);
};

export default postId;
