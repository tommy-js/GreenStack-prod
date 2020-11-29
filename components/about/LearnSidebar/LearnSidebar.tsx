import React from "react";
import "./styles.module.scss";

export const LearnSidebar: React.FC = () => {
  return (
    <div className="learn_sidebar">
      <ul className="learn_sidebar_ul">
        <li className="learn_sidebar_item">
          <div className="learn_sidebar_button"></div>Getting Started
        </li>
        <li className="learn_sidebar_item">
          <div className="learn_sidebar_button"></div>What are options
        </li>
        <li className="learn_sidebar_item">
          <div className="learn_sidebar_button"></div>What is "diversification"
        </li>
      </ul>
    </div>
  );
};
