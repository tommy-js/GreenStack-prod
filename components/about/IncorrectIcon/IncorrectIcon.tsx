import React from "react";
const incorrect = require("../../images/x_mark.png");
import "styles.module.scss";

export const IncorrectIcon: React.FC = () => {
  return (
    <div className="indicator_icon">
      <img className="icon_img" src={incorrect} />
    </div>
  );
};
