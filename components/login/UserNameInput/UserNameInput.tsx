import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Props {
  passString: (val: string) => void;
  placeholder: string;
  username: string;
  nullUserName: boolean;
}

export const UserNameInput: React.FC<Props> = (props) => {
  const [userNameBorder, setUserNameBorder] = useState("1px solid grey");

  useEffect(() => {
    if (props.nullUserName === true) setUserNameBorder("1px solid red");
    else setUserNameBorder("1px solid grey");
  }, [props.nullUserName]);

  return (
    <input
      style={{ border: userNameBorder }}
      className={styles.input_container}
      type="text"
      value={props.username}
      placeholder={props.placeholder}
      onChange={(e) => props.passString(e.target.value)}
    />
  );
};
