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
          src={props.imgUrl}
          alt=""
        />
        <Image
          width={300}
          height={300}
          className={styles.nasa}
          src={props.imgUrl2}
          alt=""
        />
        <Image
          width={300}
          height={300}
          className={styles.nasa}
          src={props.imgUrl3}
          alt=""
        />
      </div>
    </>
  );
};

export default NasaButton;
