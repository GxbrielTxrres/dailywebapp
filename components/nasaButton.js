import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NasaButton = (props) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className="text-center">Imported via Nasa API</h1>
        <img className={styles.nasa} src={props.imgUrl} alt="" />
      </div>
    </>
  );
};

export default NasaButton;
