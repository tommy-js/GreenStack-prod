import React from "react";
import "./styles.module.scss";

interface Props {
  text: string;
}

export const LoginHeader: React.FC<Props> = (props) => {
  return <h3 className="login_header">{props.text}</h3>;
};
