import styles from "./styles/RoadMap.module.css";
import "./styles/animations/dots.css";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function RoadMap() {
  const [section, setSection] = useState("where");

  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <Link to="/" className={styles.goBackMobile}>
          back
        </Link>
        <div className={styles.index}>
          <Link to="/" className={styles.go}>
            <span className={styles.back}>Home</span>
          </Link>
          <div className={styles.indexContent}>
            <div className={styles.road}>ROADMAP</div>
            {section == "where" && (
              <div className={styles.pieceActive}>Where we at</div>
            )}
            {section != "where" && (
              <div
                className={styles.piece}
                onClick={() => {
                  setSection("where");
                  document.querySelector("#hi").scrollIntoView(true);
                }}
              >
                Where we at
              </div>
            )}
            {section == "what" && (
              <div className={styles.pieceActive}>Whats left?</div>
            )}
            {section != "what" && (
              <div
                className={styles.piece}
                onClick={() => {
                  setSection("what");
                  document.querySelector("#what").scrollIntoView(true);
                }}
              >
                Whats left?
              </div>
            )}
            {section == "aim" && (
              <div className={styles.pieceActive}>Future?</div>
            )}
            {section != "aim" && (
              <div
                className={styles.piece}
                onClick={() => {
                  setSection("aim");
                  document.querySelector("#aim").scrollIntoView(true);
                }}
              >
                Future?
              </div>
            )}
          </div>
        </div>
        <div className={styles.hero}>
          <div className="animationBody">
            <div className="wrapper">
              <div className="cube"></div>
            </div>
          </div>
          <Where />
          <What />
          <Aim />
        </div>
      </div>
    </div>
  );
}

function Where() {
  return (
    <section className={styles.where} id="hi">
      {/* <img
        src={Chat}
        alt="man chatting on his laptop"
        className={styles.build}
      /> */}
      <h2 className={styles.heading}>WHERE WE AT</h2>
      <p>
        dConvos has been in development since January 2022. Ever since that it's
        been constantly going through major design and architectural changes.
        dConvos is the biggest application we've ever attempted to build, and as
        a result, obstacles are common here and there.
      </p>
      <p>Below are some of the key accomplishments we've managed to complete</p>
      <ul>
        <li>
          Design finalized <span>Feb 2022</span>
        </li>
        <li>
          React +{" "}
          <a href="https://matrix.org" target="_blank" rel="noreferrer">
            matrix
          </a>{" "}
          + cloudfare
        </li>
        <li>Open source*</li>
        <li>
          Messaging, private and groups are now live<span>March 2022</span>
        </li>
        <li>e2e encryption implemented</li>
        <li>
          Accent colors <span>March 2022</span>
        </li>
        <li>
          Spaces!<span>April 2022</span>
        </li>
      </ul>

      <div className={styles.whereFooter}>
        <p>
          *development is currently private because we haven't yet security
          tested the app
        </p>
        <p>-last updated April 11 </p>
      </div>
    </section>
  );
}

function What() {
  return (
    <section className={styles.what} id="what">
      <h2 className={styles.heading}>WHATS LEFT</h2>
      <p>
        dConvos has not been production ready yet, that's because we want to
        make sure we complete the three main parts of the application -
        Security, Privacy and Customizability. The first two has been
        implemented, and the final one is on the edge of completion.
      </p>
      <p>Some of the things remaining before v1 release are : </p>
      <ul>
        <li>Responsiveness</li>
        <li>Customizable fonts</li>
        <li>Themes</li>
        <li>More Rooms, Spaces management settings</li>
      </ul>
      <p className={styles.whatFooter}>
        Completing this will allow us to release the app for production, but
        more features are on our bucket list.
      </p>
    </section>
  );
}

function Aim() {
  return (
    <section className={styles.aimSection} id="aim">
      <h2 className={styles.heading}>FUTURE</h2>
      <p>
        dConvos is our final year project, and we are currently planning to keep
        working on it and add new features until we graduate. We dont know what
        will happen after that 😁
      </p>
    </section>
  );
}
