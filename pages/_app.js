import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className={styles.canvas}>
        <Canvas dpr={1}>
          <OrbitControls />
          <ambientLight />
          <Stars />
        </Canvas>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
