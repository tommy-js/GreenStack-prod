import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NotificationIcon } from "../../notifications/NotificationIcon/NotificationIcon";
const home = require("../../images/main_icon.png");
const portfolio = require("../../images/portfolio_icon.png");
const tutorial = require("../../images/tutorial_icon.png");
import "./styles.module.scss";

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
    <div className="navbar">
      <NavLink exact to="/home">
        <img src={home} className="navbar_icon" />
      </NavLink>
      <NavLink to="/portfolio">
        <img src={portfolio} className="navbar_icon" />
      </NavLink>
      <NavLink to="/about">
        <img src={tutorial} className="navbar_icon" />
      </NavLink>
      <NavLink onClick={() => dropToken()} to="/login">
        Logout
      </NavLink>
      <div
        id="notification_container"
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
