import React, { useState, useEffect } from "react";
import { UserIndexHoverOver } from "../UserIndexHoverOver/UserIndexHoverOver";
import Link from "next/link";
import { UserRoute } from "../../types/types";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import { enableBodyScroll } from "body-scroll-lock";
import styles from "./styles.module.scss";

interface Redux {
  userRoutes: UserRoute[];
  onUserRouteSet: (userRoutes: UserRoute[]) => void;
}

interface Props extends Redux {
  highlightUsername: string;
  highlightUserId: string;
  highlightBio: string;
  highlightProfileImage: string;
}

const UserIndexRender: React.FC<Props> = (props) => {
  return (
    <Link href={`/user/${props.highlightUserId}`}>
      <UserIndexLink props={props} />
    </Link>
  );
};

const UserIndexLink = React.forwardRef(({ onClick, href, props }, ref) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let foundInd = props.userRoutes.find(
      (el: UserRoute) => el.userId === props.highlightUserId
    );
    if (!foundInd) {
      let obj = {
        username: props.highlightUsername,
        userId: props.highlightUserId,
        bio: props.highlightBio,
        profileImage: props.highlightProfileImage,
      };
      let arr = [...props.userRoutes, obj];
      props.onUserRouteSet(arr);
    }
  }, []);

  function unlockScrollState() {
    const feed = document.getElementById("feed");
    if (feed) enableBodyScroll(feed);
  }
  function returnHoverOver() {
    if (hovered === true) {
      return (
        <UserIndexHoverOver
          highlightProfileImage={props.highlightProfileImage}
          highlightUsername={props.highlightUsername}
          highlightBio={props.highlightBio}
        />
      );
    } else return null;
  }
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <div
        className={styles.user_comment_index}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <a>{props.highlightUsername}</a>
        <div
          className={styles.username_tag_block}
          onClick={() => unlockScrollState()}
        >
          <span className={styles.username_tag}>
            @{props.highlightUsername}
          </span>
        </div>
        <div className={styles.hover_comp}>{returnHoverOver()}</div>
      </div>
    </a>
  );
});

export const UserIndex = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndexRender);
