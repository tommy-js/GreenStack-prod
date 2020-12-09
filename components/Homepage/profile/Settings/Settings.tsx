import React from "react";
import { DarkMode } from "../DarkMode/DarkMode";
import { Private } from "../Private/Private";
import { AllowComments } from "../AllowComments/AllowComments";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../actions/actions";
import styles from "./styles.module.scss";

const SettingsRender: React.FC = () => {
  return (
    <div className={styles.settings}>
      <h2 className={styles.header}>Settings</h2>
      <DarkMode />
      <Private />
      <AllowComments />
    </div>
  );
};

export const Settings = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsRender);
