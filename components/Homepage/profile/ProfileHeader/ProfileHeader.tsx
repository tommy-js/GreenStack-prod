import React, { useState } from "react";
import { SetBio } from "../SetBio/SetBio";
import { SaveProfileImage } from "../SaveProfileImage/SaveProfileImage";
import { BioCounter } from "../BioCounter/BioCounter";
import { ProfileDropzone } from "../ProfileDropzone/ProfileDropzone";
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
  const [profileImage, setProfileImage] = useState(props.profileImage);
  const [editing, setEditing] = useState(false);
  const [bio, setBio] = useState(props.bio);
  const [editingProfileImage, setEditingProfileImage] = useState(false);

  function modEditing(isEdit: boolean) {
    setEditing(isEdit);
  }

  function returnEditing() {
    if (editing === true) {
      return (
        <React.Fragment>
          <textarea
            className={styles.bio_edit_textarea}
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          />
          <SetBio bio={bio} modEditing={modEditing} />
          <BioCounter bio={bio} />
        </React.Fragment>
      );
    } else {
      return (
        <div onClick={() => setEditing(true)}>
          <div className={styles.left_container}>
            <p className={styles.bio_edit_textarea}>{bio}</p>
          </div>
          <div className={styles.right_container}>
            <img className={styles.bio_image} src={edit} />
          </div>
        </div>
      );
    }
  }

  function modifyImg(imgData: any) {
    setProfileImage(imgData);
  }

  function saveImage(img: string) {
    props.onProfileImageSet(img);
  }

  function renderDropzone() {
    if (editingProfileImage === true) {
      return (
        <div className={styles.render_dropzone}>
          <ProfileDropzone modifyImg={modifyImg} />
          <SaveProfileImage image={profileImage} saveImage={saveImage} />
        </div>
      );
    } else return null;
  }

  return (
    <div className={styles.profile_header}>
      <div className={styles.profile_header_container}>
        <div
          className={styles.profile_image_container}
          onClick={() => setEditingProfileImage(!editingProfileImage)}
        >
          <img className={styles.img_id} src={profileImage} />
        </div>
        <h2 className={styles.profile_header_username}>{props.username}</h2>
      </div>
      <div className={styles.profile_bio_container}>{returnEditing()}</div>
      {renderDropzone()}
    </div>
  );
};

export const ProfileHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeaderRender);
