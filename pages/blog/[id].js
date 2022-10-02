import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
const Post = (props) => {
  const router = useRouter();
  if (!router.isFallback && !props.post[0].title) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className={styles.noteWrapper}>
        <div className={styles.noteTitleContainer}>
          <h1>{props.post[0].title}</h1>
        </div>
        <div className={styles.notePostContainer}>
          <p>{props.post[0].post}</p>
        </div>
      </div>
      <Link href="/blog/">
        <button className={styles.homeBtn}>Back</button>
      </Link>
    </>
  );
};

export const getStaticPaths = async () => {
  const client = await clientPromise;

  const db = await client.db("projects");

  let data = await db.collection("posts").find({}).toArray();
  const paths = data.map((post) => {
    JSON.parse(JSON.stringify(post));
    return {
      params: { id: post._id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

// This also gets called at build time
export async function getStaticProps({ params }) {
  const client = await clientPromise;

  const db = await client.db("projects");

  let post = await db
    .collection("posts")
    .find({ _id: ObjectId(params.id) })
    .toArray();

  // Pass post data to the page via props
  return { props: { post: JSON.parse(JSON.stringify(post)) } };
}

export default Post;
