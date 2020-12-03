import React from "react";
import styles from "./styles.module.scss";

interface Props {
  triggerNewAccount: () => void;
}

export const AlreadyMember: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <p className={styles.text}>Already a member?</p>
      <div className={styles.centered_button}>
        <button className={styles.link} onClick={props.triggerNewAccount}>
          Login here
        </button>
      </div>
    </React.Fragment>
  );
};
