import React from "react";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import { connect } from "react-redux";
import styles from "./styles.module.scss";

interface Redux {
  newaccount: boolean;
  onNewAccountSet: (newacc: boolean) => void;
}

const SkipButtonRedux: React.FC<Redux> = (props) => {
  function submit() {
    props.onNewAccountSet(false);
  }

  return (
    <div className={styles.skip_button} onClick={() => submit()}>
      <p className={styles.text}>Skip and go straight to feed</p>
    </div>
  );
};

export const SkipButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(SkipButtonRedux);
