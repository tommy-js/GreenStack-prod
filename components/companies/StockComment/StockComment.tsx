import React, { useEffect, useState } from "react";
import { returnDate } from "./index";
import { LikeComponent } from "../LikeComponent/LikeComponent";
import styles from "./styles.module.scss";

interface Props {
  username: string;
  text: string;
  timestamp: number;
  commentId: string;
  likes: number;
  dislikes: number;
}

export const StockComment: React.FC<Props> = (props) => {
  const [time, setTime] = useState();

  useEffect(() => {
    setTime(returnDate(props.timestamp));
  }, []);

  return (
    <div className={styles.stock_comment}>
      <h4 className={styles.username}>{props.username}</h4>
      <p className={styles.text}>{props.text}</p>
      <p className={styles.posted}>Posted {time}</p>
      <LikeComponent
        commentId={props.commentId}
        likes={props.likes}
        dislikes={props.dislikes}
      />
    </div>
  );
};
