import React from "react";
import { IndividualUserProfilePost } from "../IndividualUserProfilePost/IndividualUserProfilePost";
import { PostItem } from "../../types/types";
import { NoPosts } from "../NoPosts/NoPosts";
import styles from "./styles.module.scss";

interface Props {
  posts: PostItem[];
}

export const UserProfilePosts: React.FC<Props> = (props) => {
  function renderPosts() {
    if (props.posts.length > 0) {
      return (
        <div className={styles.profile_posts}>
          {props.posts.map((el: PostItem) => (
            <IndividualUserProfilePost post={el} />
          ))}
        </div>
      );
    } else return <NoPosts />;
  }

  return <div>{renderPosts()}</div>;
};
