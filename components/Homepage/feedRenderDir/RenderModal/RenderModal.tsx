import React, { useEffect, useState } from "react";
import { CommentInputPost } from "../CommentInputPost/CommentInputPost";
import { CommentSection } from "../../commentDir/CommentSection/CommentSection";
import { PostInteraction } from "../PostInteraction/PostInteraction";
import { PostImage } from "../PostImage/PostImage";
import { UserIndex } from "../../../about/UserIndex/UserIndex";
import Link from "next/link";
import { returnDate, returnTaggedString } from "./index";
import { useLazyQuery } from "react-apollo";
import { userCommentLookup } from "../../../queries/queries";
import { enableBodyScroll } from "body-scroll-lock";
import styles from "./styles.module.scss";

interface Mapper {
  tag: string;
}

export interface PostInterface {
  title: string;
  userId: string;
  profileImage: string;
  postImage: string;
  postId: string;
  username: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  allowComments: boolean;
  allowLikes: boolean;
  comments: {
    userId: string;
    commentId: string;
    username: string;
    timestamp: number;
    text: string;
    likes: number;
    dislikes: number;
    subComments: [
      {
        userId: string;
        commentId: string;
        username: string;
        timestamp: number;
        text: string;
        likes: number;
        dislikes: number;
        parentCommentId: string;
      }
    ];
  }[];
}

interface Props {
  post: PostInterface;
  modPostLoad: (postId: string) => void;
}

export const RenderModal: React.FC<Props> = (props) => {
  const [likes, setLikes] = useState(props.post.likes);
  const [dislikes, setDislikes] = useState(props.post.dislikes);
  const [comments, setComments] = useState(props.post.comments.length);

  function returnImage() {
    if (props.post.postImage == "null") return null;
    else return <PostImage postImage={props.post.postImage} />;
  }

  function modLikes() {
    setLikes(likes + 1);
  }

  function modDislikes() {
    setDislikes(dislikes + 1);
  }

  function modComments() {
    setComments(comments + 1);
  }

  function returnText() {
    let tag = returnTaggedString(props.post.text);
    return (
      <React.Fragment>
        {tag.map((el: any) => (
          <IndMapper tag={el} />
        ))}
      </React.Fragment>
    );
  }

  function returnAllowed() {
    if (props.post.allowLikes === true) {
      return (
        <PostInteraction
          userId={props.post.userId}
          postId={props.post.postId}
          likes={likes}
          dislikes={dislikes}
          modLikes={modLikes}
          modDislikes={modDislikes}
        />
      );
    } else return null;
  }

  return (
    <div className={styles.render_modal}>
      <div className={styles.post_upper_block}>
        <h2 className={styles.title}>{props.post.title}</h2>
        <Link href={`/user/${props.post.userId}`} passHref>
          <UserLink
            profileImage={props.post.profileImage}
            username={props.post.username}
          />
        </Link>
        {returnImage()}
        <p className={styles.post_text}>{returnText()}</p>
      </div>
      <div className={styles.post_lower_block}>
        <p className={styles.post_return_date}>
          Posted {returnDate(props.post.timestamp)}
        </p>
        {returnAllowed()}
        <CommentInputPost
          userId={props.post.userId}
          postId={props.post.postId}
          modComments={modComments}
          allowComments={props.post.allowComments}
        />
        <CommentSection
          postId={props.post.postId}
          comments={props.post.comments}
        />
      </div>
    </div>
  );
};

const IndMapper: React.FC<Mapper> = (props) => {
  const [callUser, { data }] = useLazyQuery(userCommentLookup);
  const [userData, setUserData] = useState([] as any);

  useEffect(() => {
    if (props.tag.includes("@"))
      callUser({
        variables: {
          username: getUsername(),
        },
      });
  }, []);

  useEffect(() => {
    if (data) setUserData(data.specUser);
  }, [data]);

  function getUsername() {
    let username = props.tag.slice(1, props.tag.length);
    return username;
  }

  function renderFunc() {
    if (data && userData && data.specUser != null) {
      return (
        <UserIndex
          highlightUsername={userData.username}
          highlightUserId={userData.userId}
          highlightBio={userData.bio}
          highlightProfileImage={userData.profileImage}
        />
      );
    } else {
      return <span className={styles.tag_span}> {props.tag} </span>;
    }
  }

  return renderFunc();
};

const UserLink = React.forwardRef(
  ({ onClick, href, profileImage, username }, ref) => {
    return (
      <a className={styles.link} href={href} onClick={onClick} ref={ref}>
        <div
          className={`${styles.feed_profile_image_block} ${styles.feed_link}`}
        >
          <img className={styles.feed_profile_image} src={profileImage} />
        </div>
        <h3 className={styles.username}>{username}</h3>
      </a>
    );
  }
);
