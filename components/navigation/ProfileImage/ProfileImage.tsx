import React from "react";
// ONLY FOR TEST
const profileImage = require("../../../public/generic_icon.png");
import "./styles.module.scss";

export const ProfileImage: React.FC = () => {
  return (
    <div className="profile_image_block">
      <img className="profile_image" src={profileImage} />
    </div>
  );
};
