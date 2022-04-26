import styles from "./styles/App.module.css";
import "./styles/animations/indexAnimation.css";

import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function App() {
  useEffect(() => {
    const curr = window.localStorage.getItem("redirect") === "true";
    if (curr) {
      window.location.replace("https://app.dconvos.tk");
    }
  }, []);

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  function toggleRedirect() {
    const curr = window.localStorage.getItem("redirect") === "true";
    window.localStorage.setItem("redirect", !curr);
  }
  return (
    <div className="container">
      <div className={styles.header}>
        <div style={{ fontWeight: "700",marginLeft:"10px" }}>dConvos</div>

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
      <section className="section-process">
        <div className="section-container">
          <div className="process-steps-container container-medium with-padding">
            <div className="process-step-container process-step-1">
              <div className="process-step-title-container">
                <h1 className="process-step-title">Secure.</h1>
                <div className="process-step-title-overlay">Secure.</div>
              </div>
            </div>
            <div className="process-step-container process-step-2">
              <div className="process-step-title-container">
                <h1 className="process-step-title">Decentralized.</h1>
                <div className="process-step-title-overlay">Decentralized.</div>
              </div>
            </div>
            <div className="process-step-container process-step-3">
              <div className="process-step-title-container">
                <h1 className="process-step-title">Beautiful.</h1>
                <div className="process-step-title-overlay">Beautiful.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.buttons}>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <div className={styles.button2}>About</div>
        </Link>
        <a href="https://www.notion.so/ruralad/dConvos-discussions-50d70fd7fdc145cfa35a55b5bc3e61b0" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
          <div className={styles.button2}>Roadmap</div>
        </a>
      </div>

      <div className={styles.snackbar}>
        <p>redirect to app on next visit?</p>
        <span onClick={toggleRedirect}>yes</span>
      </div>
      <div className={styles.powered}>
        <p>
          powered by{" "}
          <a href="https://matrix.org" target="_blank" rel="noreferrer">
            [matrix]
          </a>
        </p>
      </div>
    </div>
  );
}
