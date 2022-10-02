import styles from "../styles/Home.module.css";

const Weather = (props) => {
  let date = new Date().toString().slice(3, 15);

  return (
    <>
      <div>
        <h1>{date}</h1>
        <p>
          {props.city}, {props.state}
        </p>
        <p className={styles.tempNumber}>{props.temp}°F</p>
        <p className={styles.currently}>Currently: {props.desc}</p>
      </div>
    </>
  );
};

export default Weather;
