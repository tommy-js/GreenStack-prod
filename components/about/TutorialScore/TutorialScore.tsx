import React from "react";
import { Score } from "../Score/Score";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import styles from "./styles.module.scss";

interface Redux {
  tutorialScores: any;
  onTutorialScoresSet: (tutorialScores: any) => void;
}

interface Props extends Redux {
  id: string;
  scores: any;
}

const TutorialScoreRedux: React.FC<Props> = (props) => {
  function onSubmit() {
    let foundEl = props.tutorialScores.find((el: any) => el.id === props.id);
    if (foundEl) {
      let index = props.tutorialScores.indexOf(foundEl);
      let obj = [...props.tutorialScores];
      obj[index].scored = true;
      props.onTutorialScoresSet(obj);
    }
  }

  return (
    <div>
      <Score id={props.id} scores={props.scores} onSubmit={onSubmit} />
    </div>
  );
};

export const TutorialScore = connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialScoreRedux);
