import React from "react";
import Link from "next/link";
import "./styles.module.scss";

export const SignedOutNavBar: React.FC = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <p className="nav_el">TIKR</p>
      </Link>
      <Link href="information">
        <p className="nav_el">About</p>
      </Link>
    </div>
  );
};
