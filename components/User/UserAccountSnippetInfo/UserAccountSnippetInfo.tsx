import React from "react";
import Link from "next/link";

interface Props {
  user: string;
  userId: string;
}

export const UserAccountSnippetInfo: React.FC<Props> = (props) => {
  return <Link href={`/user/${props.userId}`}>{props.user}</Link>;
};
