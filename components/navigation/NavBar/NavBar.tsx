import React, { useState } from "react";
import Link from "next/link";
import { NotificationIcon } from "../../notifications/NotificationIcon/NotificationIcon";
import { NavBarHeader } from "../NavBarHeader/NavBarHeader";
const home = require("../../../public/mainicon.png");
const portfolio = require("../../../public/portfolio_icon.png");
const tutorial = require("../../../public/tutorial_icon.png");
import styles from "./styles.module.scss";

export const NavBar: React.FC = () => {
  const [triggerDisplay, setTriggerDisplay] = useState("none");
  const [zeroTabOut, setZeroTabOut] = useState(false);

  function modDisplay() {
    if (triggerDisplay === "none") setTriggerDisplay("block");
    else if (triggerDisplay === "block") {
      setTriggerDisplay("none");
      setZeroTabOut(!zeroTabOut);
    }
  }

  function dropToken() {
    let token = sessionStorage.getItem("Token");
    if (token) sessionStorage.removeItem("Token");
  }

  return (
    <div className={styles.navbar}>
      <Link href="/">
        <img src={home} className={styles.navbar_icon} />
      </Link>
      <Link href="/portfolio">
        <img src={portfolio} className={styles.navbar_icon} />
      </Link>
      <Link href="/about">
        <img src={tutorial} className={styles.navbar_icon} />
      </Link>
      <Link href="/login">
        <a onClick={() => dropToken()}>Logout</a>
      </Link>
      <NavBarHeader />
      <div
        id={styles.notification_container}
        style={{ display: triggerDisplay }}
        onClick={() => {
          setZeroTabOut(!zeroTabOut);
          setTriggerDisplay("none");
        }}
      ></div>
      <NotificationIcon
        zeroTabOut={zeroTabOut}
        triggerDisplay={triggerDisplay}
        modDisplay={modDisplay}
      />
    </div>
  );
};
