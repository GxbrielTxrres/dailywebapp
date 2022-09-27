import { posts } from "../../data/posts";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(posts);
  } else if (req.method === "POST") {
    const post = req.body.post;
    const title = req.body.title;
    const newPost = {
      id: Date.now(),
      title: title,
      body: post,
    };
    posts.push(newPost);
    console.log(posts);
    res.status(201).json({ newPost });
  }
}
