import Link from "next/link";
import styles from "../styles/Home.module.css";
const Nav = () => {
  return (
    <>
      <Link href="/">
        <button className={styles.homeBtn}>Home</button>
      </Link>
    </>
  );
};

export default Nav;
