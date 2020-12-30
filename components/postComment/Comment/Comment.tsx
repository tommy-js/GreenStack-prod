import React, { useState, useEffect } from "react";
import { UserIndex } from "../../about/UserIndex/UserIndex";
import { useLazyQuery } from "react-apollo";
import { userCommentLookup } from "../../queries/queries";
import { returnDate, returnTaggedString } from "./index";
import styles from "./styles.module.scss";

interface Mapper {
  tag: string;
}

interface Props {
  commentUsername: string;
  timestamp: number;
  text: string;
}

export const Comment: React.FC<Props> = (props) => {
  function returnText() {
    let tag = returnTaggedString(props.text);
    return (
      <React.Fragment>
        {tag.map((el: any) => (
          <IndMapper tag={el} />
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={styles.comment}>
      <p className={styles.comment_name}>{props.commentUsername}</p>
      <p className={styles.comment_text}>{returnText()}</p>
      <p className={styles.comment_time}>{returnDate(props.timestamp)}</p>
    </div>
  );
};

const IndMapper: React.FC<Mapper> = (props) => {
  const [callUser, { data }] = useLazyQuery(userCommentLookup);
  const [userData, setUserData] = useState([] as any);

  useEffect(() => {
    if (props.tag.includes("@")) {
      callUser({
        variables: {
          username: getUsername(),
        },
      });
    }
  }, []);

  useEffect(() => {
    if (data) setUserData(data.specUser);
  }, [data]);

  function getUsername() {
    let username = props.tag.slice(1, props.tag.length);
    return username;
  }

  function renderFunc() {
    if (data && userData && data.specUser != null)
      return (
        <UserIndex
          highlightUsername={userData.username}
          highlightUserId={userData.userId}
          highlightBio={userData.bio}
          highlightProfileImage={userData.profileImage}
        />
      );
    else return <span className={styles.tag_span}> {props.tag} </span>;
  }

  return renderFunc();
};
