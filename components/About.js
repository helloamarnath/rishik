import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <img src="/assets/svg/line.svg" className="line" />
      <p>
        Hello! I'm Rishik Amarnath, a Student. I am studying 3rd STD in Jeevana
        School. also am the brand ambasidor for VillageCodeFactory Private
        Limited.
        <br />
        <a
          href="https://www.villagecodefactory.com"
          target="_blank"
          rel="noreferrer"
        >
          www.VillageCodeFactory.com
        </a>
      </p>
    </div>
  );
}
