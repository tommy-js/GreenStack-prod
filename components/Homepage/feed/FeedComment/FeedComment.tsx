import React, { useEffect } from "react";
import "./styles.module.scss";
import Link from "next/link";

type Reference = {
  postId: string;
  text: string;
};

interface Props {
  username: string;
  profileImage: string;
  text: string;
  reference: Reference;
  currentIndex: number;
  view: number;
  loadMore: (val: number) => void;
}

export const FeedComment: React.FC<Props> = (props) => {
  useEffect(() => {
    let postElement = document.getElementById(`id_${props.reference.postId}`);
    if (postElement) {
      const rect = postElement.getBoundingClientRect();
      if (rect.top >= 0) props.loadMore(props.currentIndex);
    }
  }, [props.view]);

  return (
    <React.Fragment>
      <div className="feed_comment_header">
        <div className="feed_top_block">
          <div className="feed_comment_image_block">
            <img src={props.profileImage} className="feed_comment_image" />
          </div>
          <p className="feed_comment_header_username">{props.username}</p>
        </div>
        <p className="feed_comment_header_text">{props.text}</p>
      </div>
      <Link href={`/home/post/${props.reference.postId}`}>
        <a>{props.username}</a>
      </Link>
      <div className="feed_comment_base">
        <span className="feed_comment_base_reference_text">
          {props.reference.text}
        </span>
      </div>
    </React.Fragment>
  );
};
