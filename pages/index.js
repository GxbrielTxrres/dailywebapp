import { loadImage } from "../lib/NasaImg";
import { loadWeather } from "../lib/Weather";
import { loadQuotes } from "../lib/quotes";
import Head from "next/head";
import Weather from "../components/weather";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import NasaButton from "../components/nasaButton";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Daily App</title>
        <meta
          name="description"
          content="Daily weather app that provides inspirational messages, beatuiful images of space, and has a built in note tracker."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mainContainer}>
        <div className={styles.grid}>
          <div className={styles.weather}>
            <Weather
              city={props.weather.data[0].city_name}
              state={props.weather.data[0].state_code}
              temp={props.weather.data[0].temp}
              desc={props.weather.data[0].weather.description}
            />
          </div>

          <NasaButton
            imgUrl={props.data[0].url}
            imgUrl2={props.data[1].url}
            imgUrl3={props.data[2].url}
          />

          <div className={styles.quote}>
            <p
              className={styles.quoteSz}
              style={{ fontSize: 24, marginBottom: 10 }}
            >
              {props.quote[0].q}
            </p>
            <Link href="/blog/">
              <button>Notes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await loadImage();
  const weather = await loadWeather();
  const quote = await loadQuotes();
  return { props: { data, weather, quote } };
}
