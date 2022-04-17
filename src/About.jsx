import styles from "./styles/About.module.css";
import "./styles/animations/grid.css";

import { Link } from "react-router-dom";

import Lock from "./assets/lock.webp";
import Arrange from "./assets/arrange.webp";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.animationBody}>
        <div className="grid"></div>
      </div>
      <div className={styles.header}>
        <Link
          to="/"
          style={{
            marginLeft: "10px",
            textDecoration: "none",
            color: "var(--text-primary",
            fontSize: "1rem",
          }}
        >
          {"<"} Home
        </Link>
        <div>
          <a
            className={styles.button}
            href="https://app.dconvos.tk"
            rel="noreferrer"
          >
            Login
          </a>
        </div>
      </div>
      <div className={styles.text}>
        <p>We'll keep it short : </p>
        <p>
          Build on top of{" "}
          <a href="" style={{ textDecoration: "none" }}>
            Matrix
          </a>{" "}
          , <br /> dConvos lets you choose where your data should live, <br />
          how the app should look, and most importantly, <br /> you'll get true
          end-to-end encryption. That's it!
        </p>
        <p>Wan't to know more? Try it out then.</p>
      </div>
      {/* <div className={styles.one}>
        <div className={styles.text}>
          <h1>you own your conversations</h1>
          <p>
            built on top of Matrix, all your conversations are end-to-end
            encrypted by default.
          </p>
          <p>no one can read your messages or listen to your calls.</p>
        </div>
        <img src={Lock} alt="lock" className={styles.lockImage} />
      </div>
      <div className={styles.two}>
        <div className={styles.text}>
          <h1>beautiful & highly customizable UI</h1>
          <p>
            simple and smooth interface along with giving the users the freedom to choose how the application wants to look.
          </p>
        </div>
        <img src={Arrange} alt="arranging" className={styles.arrangeImage} />
      </div> */}
    </div>
  );
}
