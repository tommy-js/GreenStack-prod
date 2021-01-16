import React, { useState } from "react";
import { HistoryElement } from "../HistoryElement/HistoryElement";
import { LoadMore } from "../LoadMore/LoadMore";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import styles from "./styles.module.scss";

interface Redux {
  userHistory: any;
}

const PersonalHistoryRender: React.FC<Redux> = (props) => {
  // const [elements] = useState(props.userHistory.slice(0, 100));
  const [shortList, setShortList] = useState(props.userHistory.slice(0, 6));
  const [showButton, setShowButton] = useState(true);

  function modShortList() {
    let useHis = props.userHistory;
    let len = shortList.length + 5;
    if (len < useHis.length) {
      let els = useHis.slice(0, len);
      setShortList(els);
      setShowButton(true);
    } else {
      setShortList(useHis);
      setShowButton(false);
    }
  }

  function returnButton() {
    if (showButton === true) {
      return <LoadMore loadMore={modShortList} />;
    } else return null;
  }

  return (
    <div>
      <h2 className={styles.header}>History</h2>
      {shortList.map((el: any) => (
        <HistoryElement
          text={el.text}
          timestamp={el.timestamp}
          postId={el.postId}
          typename={el.__typename}
        />
      ))}
      {returnButton()}
    </div>
  );
};

export const PersonalHistory = connect(mapStateToProps)(PersonalHistoryRender);
