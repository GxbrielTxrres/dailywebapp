import styles from "../styles/Form.module.css";

const Form = () => {
  return (
    <>
      <form method="POST">
        <div className={styles.div}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" />
          <label htmlFor="post">Post</label>
          <textarea name="post" rows="10" cols="30"></textarea>
          <button>Post</button>
          <button>Test</button>
        </div>
      </form>
    </>
  );
};

export default Form;
