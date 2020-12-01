import React from "react";
import styles from "./styles.module.scss";

interface Props {
  passString: (val: string) => void;
  placeholder: string;
  username: string;
}

export const UserNameInput: React.FC<Props> = (props) => {
  return (
    <input
      className={styles.input_container}
      type="text"
      value={props.username}
      placeholder={props.placeholder}
      onChange={(e) => props.passString(e.target.value)}
    />
  );
};
