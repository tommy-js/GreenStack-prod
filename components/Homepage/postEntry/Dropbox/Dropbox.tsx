import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
const add_img = require("../../../../public/add_image.png");
import styles from "./styles.module.scss";

interface Props {
  modifyImg: (imgData: any) => void;
  valueOpacity: number;
}

export const Dropbox: React.FC<Props> = (props) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onload = () => {
        const binaryStr = reader.result;
        props.modifyImg(binaryStr);
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <section
      style={{ opacity: props.valueOpacity }}
      className={styles.profile_image_dropzone}
    >
      <div {...getRootProps({ id: "dropzone" })}>
        <input {...getInputProps()} />
        <img className={styles.image} src={add_img} />
      </div>
    </section>
  );
};
