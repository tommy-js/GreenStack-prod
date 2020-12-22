import React from "react";
import Link from "next/link";

interface Props {
  postId: string;
}

export const BackButton: React.FC<Props> = (props) => {
  return <Link href={`/post/${props.postId}`}>Back</Link>;
};
