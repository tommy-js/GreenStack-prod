import React from "react";
const correct = require("../../../public/checkmark.png");
import "styles.module.scss";

export const CorrectIcon: React.FC = () => {
  return (
    <div className="indicator_icon">
      <img className="icon_img" src={correct} />
    </div>
  );
};
