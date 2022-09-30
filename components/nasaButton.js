import styles from "../styles/Home.module.css";

const NasaButton = (props) => {
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.nasa}
          style={{ zIndex: -5 }}
          src={props.imgUrl}
          alt=""
        />
      </div>
    </>
  );
};

export default NasaButton;
