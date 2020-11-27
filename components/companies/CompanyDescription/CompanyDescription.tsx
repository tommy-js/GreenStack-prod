import React from "react";
import "./styles.module.scss";

interface Props {
  title: string;
  description: string;
}

export const CompanyDescription: React.FC<Props> = (props) => {
  return (
    <div className="company_description_block">
      <h2>About {props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};
