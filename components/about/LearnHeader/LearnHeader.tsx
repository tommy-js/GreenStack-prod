import React from "react";
import "./styles.module.scss";

interface Props {
  header: string;
}

export const LearnHeader: React.FC<Props> = (props) => {
  return (
    <div className="learn_header">
      <h3 className="learn_header_span">{props.header}</h3>
    </div>
  );
};
