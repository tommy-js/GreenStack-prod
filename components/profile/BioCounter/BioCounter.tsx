import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Props {
  bio: string;
}

export const BioCounter: React.FC<Props> = (props) => {
  const [textColor, setTextColor] = useState("green");
  const [opac, setOpac] = useState(0);
  const [initialBio] = useState(props.bio);

  useEffect(() => {
    if (props.bio === initialBio) setOpac(0);
    else setOpac(1);
  }, [props.bio]);

  useEffect(() => {
    if (props.bio.length <= 50) {
      setTextColor("green");
    } else if (props.bio.length > 50 && props.bio.length <= 100) {
      setTextColor("orange");
    } else if (props.bio.length > 100) {
      setTextColor("red");
    }
  }, [props.bio]);

  return (
    <div
      style={{ color: textColor, opacity: opac }}
      className={styles.bio_counter}
    >
      ({props.bio.length}/120)
    </div>
  );
};
