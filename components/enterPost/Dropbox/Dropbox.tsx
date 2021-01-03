import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
const add_img = require("../../../public/add_image.png");
import styles from "./styles.module.scss";

interface Props {
  modifyImg: (imgData: any) => void;
  valueOpacity: number;
}

export const Dropbox: React.FC<Props> = (props) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const reader = new FileReader();

      reader.onload = () => {
        const binaryStr = reader.result;
        props.modifyImg(binaryStr);
      };
      reader.readAsDataURL(acceptedFiles[0]);

      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div className={styles.thumb} key={file.name}>
      <div className={styles.thumb_inner}>
        <img className={styles.thumb_img} src={file.preview} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div className={styles.profile_image_dropzone}>
      <section
        style={{ opacity: props.valueOpacity }}
        className={styles.section}
      >
        <div {...getRootProps({ id: "dropzone" })}>
          <input {...getInputProps()} />
          <img className={styles.image} src={add_img} />
        </div>
      </section>
      <div className={styles.thumbs_container}>{thumbs}</div>
    </div>
  );
};
