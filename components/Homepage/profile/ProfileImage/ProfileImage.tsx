import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateUserProfileImageMutation } from "../../../queries/queries.js";
import styles from "./styles.module.scss";
const add = require("../../../../public/add_image.png");

interface Props {
  profileImage: string;
  updateUserProfileImageMutation: (variables: object) => any;
  modifyImg: (imgData: any) => void;
}

const ProfileImageMutation: React.FC<Props> = (props) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onload = () => {
        const binaryStr = reader.result;
        props.modifyImg(binaryStr);
        submit(binaryStr);
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  function submit(image: string | ArrayBuffer) {
    let token = sessionStorage.getItem("Token");
    props
      .updateUserProfileImageMutation({
        variables: {
          token: token,
          image: image,
        },
      })
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => console.log(err));
  }

  return (
    <div className={styles.profile_image_dropzone}>
      <div {...getRootProps({ id: "dropzone" })}>
        <input {...getInputProps()} />
        <div className={styles.overlay}></div>
        <div className={styles.profile_image_container}>
          <img className={styles.img} src={props.profileImage} />
        </div>
        <div className={styles.add_image_block}>
          <img className={styles.add_image} src={add} />
        </div>
      </div>
    </div>
  );
};

export const ProfileImage = compose(
  graphql(updateUserProfileImageMutation, {
    name: "updateUserProfileImageMutation",
  })
)(ProfileImageMutation);
