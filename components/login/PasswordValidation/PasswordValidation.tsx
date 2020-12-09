import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Props {
  char8: boolean;
  char64: boolean;
  charSpecial: boolean;
  charCapital: boolean;
  charNum: boolean;
  password: string;
}

export const PasswordValidation: React.FC<Props> = (props) => {
  const [opac, setOpac] = useState(0);

  useEffect(() => {
    if (props.password.length > 0) setOpac(1);
    else if (props.password.length === 0) setOpac(0);
  }, [props.password]);

  return (
    <div className={styles.password_validation} style={{ opacity: opac }}>
      <div className={styles.password_validation_checkbox}>
        <input type="checkbox" checked={props.char8} readOnly />
        <label className={styles.text}>Longer than 8 characters</label>
      </div>
      <div className={styles.password_validation_checkbox}>
        <input type="checkbox" checked={props.charSpecial} readOnly />
        <label className={styles.text}>At least 1 special character</label>
      </div>
      <div className={styles.password_validation_checkbox}>
        <input type="checkbox" checked={props.charCapital} readOnly />
        <label className={styles.text}>At least 1 capital letter</label>
      </div>
      <div className={styles.password_validation_checkbox}>
        <input type="checkbox" checked={props.charNum} readOnly />
        <label className={styles.text}>At least 1 number</label>
      </div>
    </div>
  );
};
