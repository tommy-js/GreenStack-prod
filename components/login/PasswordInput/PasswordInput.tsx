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
  const [viewable, setViewable] = useState(false);

  useEffect(() => {
    if (props.nullPassword === true) {
      setPasswordBorder("1px solid red");
    }
  }, [props.nullPassword]);

  function showPassword() {
    let input = document.getElementById("login_access") as HTMLInputElement;
    if (input.type === "password") {
      setViewable(true);
      input.type = "text";
    } else {
      setViewable(false);
      input.type = "password";
    }
  }

  function renderShowPass() {
    if (props.password.length > 0) {
      return (
        <div className={styles.show_password} onClick={() => showPassword()}>
          <input
            className={styles.checkbox}
            checked={viewable}
            type="checkbox"
          />
          <label className={styles.text}>Show Password</label>
        </div>
      );
    } else return null;
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
