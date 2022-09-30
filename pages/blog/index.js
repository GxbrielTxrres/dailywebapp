import { useState } from "react";
import styles from "../../styles/Home.module.css";
import clientPromise from "../../lib/mongodb";

export default function blogPosts({ posts }) {
  const [Posts, setPosts] = useState(posts);
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");

  const submitPost = async () => {
    const res = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({ title, post }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    posts.unshift(data);
    setPosts([...posts]);
    setTitle("");
    setPost("");
    console.log(posts);
  };

  return (
    <>
      <div className={styles.div}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <label htmlFor="post">Post</label>
        <textarea
          onChange={(e) => setPost(e.target.value)}
          value={post}
          name="post"
          rows="10"
          cols="30"
        ></textarea>

        <button onClick={submitPost}>Submit</button>
        {Posts.map((post) => {
          return (
            <div key={post._id}>
              <h1>{post.title}</h1>
              <p>{post.post}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const client = await clientPromise;
    const db = await client.db("projects");

    const posts = await db
      .collection("posts")
      .find({})
      .limit(50)
      .sort({ _id: -1 })
      .toArray();

    return {
      props: { posts: JSON.parse(JSON.stringify(posts)) },
    };
  } catch (e) {
    console.error(e);
  }
};
