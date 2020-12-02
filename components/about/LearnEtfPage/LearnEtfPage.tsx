import React, { useState } from "react";
import { NavBar } from "../../navigation/NavBar/NavBar";
import { CommentSection } from "../CommentSection/CommentSection";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { useQuery } from "react-apollo";
import { tutorialQuery } from "../../queries/queries";
import styles from "./styles.module.scss";

interface Props {
  progress: any;
  progressElements: any;
}

const LearnEtfPageRender: React.FC<Props> = (props) => {
  const { data } = useQuery(tutorialQuery, {
    variables: { id: 3 },
    pollInterval: 500,
  });
  const [comments, setComments] = useState([] as any);
  return (
    <div>
      <NavBar />
      <div className={styles.learn_page}>
        <h2 className={styles.learn_page_header}>ETFs and Index Funds</h2>
        <p className={styles.learn_page_paragraph}></p>
        <CommentSection id="3" comments={comments} />
      </div>
    </div>
  );
};

export const LearnEtfPage = connect(mapStateToProps)(LearnEtfPageRender);
