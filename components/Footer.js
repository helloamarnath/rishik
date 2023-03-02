import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="social-accounts">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i class="bi bi-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i class="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          Made with <span className="heart">&#9829;</span> in India
          <p className="bottom">
            Copyright ©{" "}
            <a href="https://rishikamarnath.com">rishikamarnath.com</a> 2023
          </p>
        </div>
      </div>
    </footer>
  );
}
