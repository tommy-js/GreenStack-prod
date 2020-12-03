import React from "react";
import styles from "./styles.module.scss";

interface Props {
  triggerNewAccount: () => void;
}

export const NeedNewAccount: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <p className={styles.text}>Want to join the party?</p>
      <div className={styles.centered_button}>
        <button className={styles.link} onClick={props.triggerNewAccount}>
          Create a new account
        </button>
      </div>
    </React.Fragment>
  );
};
