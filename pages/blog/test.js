import { useState } from "react";
import styles from "../../styles/Home.module.css";

export default function blogPosts() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");

  const fetchPosts = async () => {
    const res = await fetch("/api/blog");
    const data = await res.json();
    setPosts(data);
    console.log(posts);
  };

  const submitPost = async () => {
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({ post, title }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    fetchPosts();
    console.log(data);
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
        <button onClick={fetchPosts}>Fetch</button>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              {post.post} {post.title}
            </div>
          );
        })}
        <button onClick={submitPost}>Submit</button>
      </div>
    </>
  );
}
