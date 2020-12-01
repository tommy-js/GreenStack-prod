import React from "react";
import Link from "next/link";

interface Props {
  text: string;
  path: string;
}

export const MenuItem: React.FC<Props> = (props) => {
  return <Link href={props.path}>{props.text}</Link>;
};
