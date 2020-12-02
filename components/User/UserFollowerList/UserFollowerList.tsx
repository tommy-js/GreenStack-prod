import React, { useContext, useEffect, useState } from "react";
import { UserAccountSnippet } from "../UserAccountSnippet/UserAccountSnippet";
import { SettingsInputBox } from "../SettingsInputBox/SettingsInputBox";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { FollowerItem } from "../../types/types";

interface Redux {
  followers: FollowerItem[];
}

const UserFollowLi: React.FC<Redux> = (props) => {
  const [stateHide, setStateHide] = useState(false);
  const [updateBlocked] = useState(false);

  function passInHide() {
    setStateHide(!stateHide);
  }

  return (
    <React.Fragment>
      <SettingsInputBox
        text="Show blocked"
        isChecked={false}
        passInHide={passInHide}
      />
      {props.followers.map((el: FollowerItem) => (
        <UserAccountSnippet
          key={el.followerId}
          user={el.followerName}
          userId={el.followerId}
          blocked={el.blocked}
          stateHide={stateHide}
          updateBlocked={updateBlocked}
        />
      ))}
    </React.Fragment>
  );
};

export const UserFollowerList = connect(mapStateToProps)(UserFollowLi);
