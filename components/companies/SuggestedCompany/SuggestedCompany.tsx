import React from "react";
import { Header } from "../../User/Header/Header";

interface Props {
  text: string;
}

export const SuggestedCompany: React.FC<Props> = (props) => {
  return (
    <div className="company_mapper">
      <Header text={props.text} />
    </div>
  );
};
