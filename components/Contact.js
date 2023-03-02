import { Row, Col } from "react-bootstrap";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <img src="/assets/svg/line.svg" className="line" />
      <Row className={styles.boxes}>
        <Col lg={4} md={6} sm={12}>
          <a
            href="mailto:hi@rishikamarnath.com"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-envelope"></i>
            hi@rishikamarnath.com
          </a>
        </Col>
      </Row>
    </div>
  );
}
