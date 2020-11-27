import React from "react";
import { SuggestionHeader } from "../SuggestionHeader/SuggestionHeader";
import { Suggestion } from "../Suggestion/Suggestion";
import "./styles.module.scss";

export const Suggested: React.FC = () => {
  return (
    <div className="suggestion_div">
      <SuggestionHeader />
      <Suggestion typeId={0} />
    </div>
  );
};
