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
  const [logInvalid, setLogInvalid] = useState(false);

  useEffect(() => {
    if (props.nullUserName === true) setUserNameBorder("1px solid red");
    else setUserNameBorder("1px solid grey");
  }, [props.nullUserName]);

  function returnInvalidLog() {
    if (logInvalid === true) {
      return (
        <p className={styles.invalid_log}>
          *Username may only include letters and numbers
        </p>
      );
    } else return null;
  }

  function testInput(input: string) {
    let usernameTest = /[~`!#$%\^&*+=\-\[\]\\@(). ';,/{}|\\":<>\?]/g.test(
      input
    );
    if (usernameTest === false) {
      props.passString(input);
      setLogInvalid(false);
    } else setLogInvalid(true);
  }

  return (
    <div>
      <input
        style={{ border: userNameBorder }}
        className={styles.input_container}
        type="text"
        value={props.username}
        placeholder={props.placeholder}
        onChange={(e) => testInput(e.target.value)}
      />
      {returnInvalidLog()}
    </div>
  );
};
