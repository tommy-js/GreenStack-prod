import React from "react";
import { SuggestionHeader } from "../SuggestionHeader/SuggestionHeader";
import { Suggestion } from "../Suggestion/Suggestion";
import styles from "./styles.module.scss";

export const Suggested: React.FC = () => {
  return (
    <div className={styles.suggestion_div}>
      <SuggestionHeader />
      <Suggestion typeId={0} />
    </div>
  );
};
