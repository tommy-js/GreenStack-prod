import React, { useState } from "react";
import { HistoryElement } from "../HistoryElement/HistoryElement";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../actions/actions";
import styles from "./styles.module.scss";

interface Redux {
  userHistory: any;
}

const PersonalHistoryRender: React.FC<Redux> = (props) => {
  return (
    <div>
      <h2 className={styles.header}>History</h2>
      {props.userHistory.map((el: any) => (
        <HistoryElement
          text={el.text}
          timestamp={el.timestamp}
          postId={el.postId}
          typename={el.__typename}
        />
      ))}
    </div>
  );
};

export const PersonalHistory = connect(mapStateToProps)(PersonalHistoryRender);
