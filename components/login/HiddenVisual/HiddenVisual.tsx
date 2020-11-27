import React from "react";
import "./styles.module.scss";

interface Props {
  opac: number;
  text: string;
}

export const HiddenVisual: React.FC<Props> = (props) => {
  return (
    <p className="hidden_visual" style={{ opacity: props.opac }}>
      {props.text}
    </p>
  );
};
