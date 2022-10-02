import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";
export function Post(props) {
  console.log(props.post);
  return <div>{props.post[0]._id}</div>;
}

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
  console.log(params);
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
