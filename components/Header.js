import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <main className={styles.header}>
      <img src="/assets/images/rishik.png" className={styles.dp} />

      <h1 className={styles.name}>Hello! I'm Rishik,</h1>

      <p className={styles.about}>
        A Student. I am studying 3rd STD in Jeevana School.
        <br />
      </p>
    </main>
  );
}
