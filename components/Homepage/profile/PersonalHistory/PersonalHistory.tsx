import React, { useState } from "react";
import { HistoryElement } from "../HistoryElement/HistoryElement";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../actions/actions";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import styles from "./styles.module.scss";

const PersonalHistoryRender: React.FC = () => {
  const [postRendered, setPostRendered] = useState(false);
  const [postInfo, setPostInfo] = useState();

  function modPostLoad(postId: string) {
    const feed = document.getElementById("feed")!;
    if (postRendered === true) {
      setPostRendered(false);
      enableBodyScroll(feed);
    } else {
      setPostRendered(true);
      disableBodyScroll(feed);
    }
  }

  return <h2 className={styles.header}>History</h2>;
};

export const PersonalHistory = connect(mapStateToProps)(PersonalHistoryRender);
