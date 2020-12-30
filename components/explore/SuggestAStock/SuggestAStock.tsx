import React from "react";
import { SuggestionHeader } from "../SuggestionHeader/SuggestionHeader";
import { SuggestionBody } from "../SuggestionBody/SuggestionBody";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import styles from "./styles.module.scss";

export const SuggestAStock: React.FC = () => {
  return (
    <div className={styles.suggest_a_stock}>
      <SuggestionHeader />
      <SuggestionBody />
      <SubmitButton />
    </div>
  );
};
