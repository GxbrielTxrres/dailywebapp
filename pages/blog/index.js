import { useState } from "react";
import styles from "../../styles/Blog.module.css";
import clientPromise from "../../lib/mongodb";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import Link from "next/link";
import Nav from "../../components/nav";

export default function BlogPosts({ posts }) {
  const [Posts, setPosts] = useState(posts);
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");

  const deleteNote = async (postId) => {
    console.log(postId);

    const res = await fetch(`/api/${postId}`, {
      method: "DELETE",
    });

    let data = await res.json();
    console.log(data);
    setPosts(data);
  };

  const submitNote = async () => {
    const res = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({ title, post }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(posts);
    let data = await res.json();
    console.log(data);

    setPosts(data);
    setTitle("");
    setPost("");
  };

  return (
    <>
      <div className={styles.div}>
        <Nav />
        <div className={styles.inputContainer}>
          <label htmlFor="title">Title:</label>
          <input
            maxLength={20}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
          />
          <label htmlFor="post">Post:</label>
          <textarea
            onChange={(e) => setPost(e.target.value)}
            value={post}
            name="post"
            rows="10"
            cols="30"
          ></textarea>

          <button className={styles.btn} onClick={submitNote}>
            Submit
          </button>
        </div>
        <div className={styles.canvas}>
          <Canvas dpr={1}>
            <OrbitControls />
            <ambientLight />

            <Stars />
          </Canvas>
        </div>

        {Posts.map((post) => {
          return (
            <div id={post._id} key={post._id}>
              <div className={styles.delete}>
                <button
                  className={styles.x}
                  onClick={() => deleteNote(post._id)}
                >
                  X
                </button>
              </div>
              <Link href={`/blog/${post._id}`}>
                <div className={styles.post}>
                  <h1>{post.title}</h1>
                  <p style={{ paddingLeft: 15 }} className={styles.shortPost}>
                    {post.post}
                  </p>
                </div>
              </Link>
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
