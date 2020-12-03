import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Props {
  visible: boolean;
}

export const UserAlreadyExists: React.FC<Props> = (props) => {
  const [visibility, setVisibility] = useState("none");

  useEffect(() => {
    if (props.visible === false) setVisibility("none");
    else if (props.visible === true) setVisibility("block");
  }, [props.visible]);

  return (
    <p style={{ display: visibility }} className={styles.text}>
      That username is unavailable.
    </p>
  );
};
