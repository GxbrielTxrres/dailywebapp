import { loadWeather } from "../../lib/Weather";
import { loadImage } from "../../lib/NasaImg";
import styles from "../../styles/Home.module.css";

export default function Weather({ weather, image }) {
  return (
    <>
      <div>
        <h1>
          {weather.data[0].city_name}, {weather.data[0].state_code}
        </h1>
        <h2>{weather.data[0].temp}</h2>
        <p>{weather.data[0].weather.description}</p>
      </div>
      <img className={styles.nasa} src={image[0].hdurl} alt="" />
    </>
  );
}

export async function getStaticProps() {
  const weather = await loadWeather();
  const image = await loadImage();

  return { props: { weather, image } };
}
