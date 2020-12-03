import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Props {
  passString: (val: string) => void;
  placeholder: string;
  password: string;
  nullPassword: boolean;
}

export const PasswordInput: React.FC<Props> = (props) => {
  const [passwordBorder, setPasswordBorder] = useState("1px solid grey");

  useEffect(() => {
    if (props.nullPassword === true) {
      setPasswordBorder("1px solid red");
    }
  }, [props.nullPassword]);

  function renderShowPass() {
    if (props.password.length > 0) {
      return (
        <React.Fragment>
          <input type="checkbox" onClick={() => showPassword()} />
          <label>Show Password</label>
        </React.Fragment>
      );
    } else return null;
  }

  function showPassword() {
    let input = document.getElementById("login_access") as HTMLInputElement;
    if (input.type === "password") input.type = "text";
    else input.type = "password";
  }

  return (
    <React.Fragment>
      <input
        style={{ border: passwordBorder }}
        id="login_access"
        className={styles.input_container}
        type="password"
        value={props.password}
        placeholder={props.placeholder}
        onChange={(e) => props.passString(e.target.value)}
      />
      {renderShowPass()}
    </React.Fragment>
  );
};
