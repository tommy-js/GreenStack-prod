import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
const locked = require("../../../../public/closed_lock.png");
const unlocked = require("../../../../public/opened_lock.png");

interface Props {
  valueOpacity: number;
  title: string;
  modTitle: (input: string) => void;
}

export const PostHeadInput: React.FC<Props> = (props) => {
  const [opac, setOpac] = useState(props.valueOpacity);
  const [headLen, setHeadLen] = useState("200px");
  const [image, setImage] = useState(unlocked);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (isLocked === false) {
      setOpac(props.valueOpacity);
    }
  }, [props.valueOpacity]);

  function modLocked() {
    if (isLocked === true) {
      setImage(unlocked);
    } else {
      setImage(locked);
    }
    setIsLocked(!isLocked);
  }

  useEffect(() => {
    if (props.title.length > 15) setHeadLen("500px");
    else setHeadLen("200px");
  }, [props.title]);

  return (
    <div style={{ opacity: opac }} className={styles.post_head_input}>
      <div className={styles.image_block} onClick={() => modLocked()}>
        <img className={styles.image} src={image} />
      </div>
      <input
        value={props.title}
        style={{ width: headLen }}
        placeholder="Give it a title..."
        className={styles.post_header}
        onChange={(e) => props.modTitle(e.target.value)}
      />
    </div>
  );
};
