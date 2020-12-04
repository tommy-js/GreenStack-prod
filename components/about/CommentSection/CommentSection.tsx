import React, { useEffect, useState } from "react";
import { CommentSectionInput } from "../CommentSectionInput/CommentSectionInput";
import { Comments } from "../Comments/Comments";
import { CommentItem } from "../../types/types";
import styles from "./styles.module.scss";

interface Props {
  id: string;
  comments: CommentItem[];
}

export const CommentSection: React.FC<Props> = (props) => {
  return (
    <div className={styles.comment_section}>
      <h3 className={styles.comment_section_header}>Leave a comment</h3>
      <CommentSectionInput id={props.id} />
      <Comments comments={props.comments} />
    </div>
  );
};
