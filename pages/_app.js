import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight, Stars } from "@react-three/drei";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
