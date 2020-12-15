import React, { useEffect, useState } from "react";
import { LikeComponent } from "../LikeComponent/LikeComponent";
import Link from "next/link";
import { returnDate } from "./index";
import styles from "./styles.module.scss";

interface Props {
  username: string;
  userId: string;
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
    <div className={styles.stock_comment} key={props.commentId}>
      <Link href={`/user/${props.userId}`} passHref>
        <UserLink username={props.username} />
      </Link>
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

const UserLink = React.forwardRef(({ onClick, href, username }, ref) => {
  return (
    <a href={href} className={styles.link} onClick={onClick} ref={ref}>
      <h4 className={styles.username}>{username}</h4>
    </a>
  );
});
