import React, { useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  id: number;
  selected: boolean;
  modSelected: (id: number) => void;
}

const Box: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState(props.selected);

  function modSelected() {
    setSelected(!selected);
    props.modSelected(props.id);
  }

  return (
    <div className={styles.select_boxes} onClick={() => modSelected()}>
      <input
        type="checkbox"
        checked={selected}
        className={styles.box_checkbox}
      />
      <p className={styles.box_title}>{props.title}</p>
    </div>
  );
};

export default Box;
