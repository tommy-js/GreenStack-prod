import React from "react";
import "./styles.module.scss";

export const LoadingUser: React.FC = () => {
  return (
    <React.Fragment>
      <div className="spinning_dial_container">
        <div className="spinning_dial"></div>
      </div>
      <h2 className="loading_user">Loading...</h2>
    </React.Fragment>
  );
};

export const LoadingGeneral: React.FC = () => {
  return (
    <React.Fragment>
      <div className="spinning_dial_container">
        <div className="spinning_dial_general"></div>
      </div>
      <h2 className="loading_user_general">Loading...</h2>
    </React.Fragment>
  );
};
