import styles from "../styles/Home.module.css";
import Image from "next/image";
const NasaButton = (props) => {
  return (
    <>
      <div className={styles.container}>
        <Image
          width={300}
          height={300}
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
