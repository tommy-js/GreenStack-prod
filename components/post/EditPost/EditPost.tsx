import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const edit = require("../../../public/edit.png");
const edit_highlight = require("../../../public/edit_highlight.png");

interface Props {
  postId: string;
}

export const EditPost: React.FC<Props> = (props) => {
  return (
    <Link href={`/edit/${props.postId}`} passHref>
      <EditLink />
    </Link>
  );
};

const EditLink = React.forwardRef(({ onClick, href }, ref) => {
  const [editImg, setEditImg] = useState(edit);
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <div
        className={styles.image_block}
        onMouseEnter={() => setEditImg(edit_highlight)}
        onMouseLeave={() => setEditImg(edit)}
      >
        <img className={styles.image} src={editImg} />
      </div>
    </a>
  );
});
