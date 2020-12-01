import React from "react";
import Link from "next/link";
import "./styles.module.scss";

export const SignedOutNavBar: React.FC = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <a className="nav_el">TIKR</a>
      </Link>
      <Link href="information">
        <a className="nav_el">About</a>
      </Link>
    </div>
  );
};
