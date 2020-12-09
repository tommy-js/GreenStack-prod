import React, { useState, useEffect } from "react";
import { SetBio } from "../SetBio/SetBio";
import { BioCounter } from "../BioCounter/BioCounter";
import { ProfileImage } from "../ProfileImage/ProfileImage";
const edit = require("../../../../public/edit.png");
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../actions/actions";
import styles from "./styles.module.scss";

interface Redux {
  profileImage: string;
  username: string;
  bio: string;
  onProfileImageSet: (profileImage: string) => void;
}

const ProfileHeaderRender: React.FC<Redux> = (props) => {
  const [bio, setBio] = useState(props.bio);
  const [textareaHeight, setTextareaHeight] = useState("40px");

  useEffect(() => {
    if (bio.length > 60) setTextareaHeight("70px");
    else setTextareaHeight("40px");
  }, [bio]);

  function modifyImg(imgData: any) {
    props.onProfileImageSet(imgData);
  }

  function focusTextarea() {
    document.getElementById("textareaID").focus();
  }

  return (
    <div className={styles.profile_header}>
      <div className={styles.profile_header_container}>
        <ProfileImage profileImage={props.profileImage} modifyImg={modifyImg} />
        <h2 className={styles.username}>{props.username}</h2>
      </div>
      <div className={styles.profile_bio_container}>
        <textarea
          id="textareaID"
          className={styles.textarea}
          style={{ height: textareaHeight }}
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        />
        <div
          className={styles.edit_image_block}
          onClick={() => focusTextarea()}
        >
          <img className={styles.edit_image} src={edit} />
        </div>
        <SetBio bio={bio} />
        <BioCounter bio={bio} />
      </div>
    </div>
  );
};

export const ProfileHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeaderRender);
