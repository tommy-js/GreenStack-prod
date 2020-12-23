import React from "react";
import { Score } from "../Score/Score";
import styles from "./styles.module.scss";

interface Props {
  id: string;
  scores: any;
}

export const TutorialScore: React.FC<Props> = (props) => {
  return (
    <div>
      <Score id={props.id} scores={props.scores} />
    </div>
  );
};
