import React from "react";
import Link from "next/link";

interface Props {
  text: string;
  path: string;
}

export const SidebarElement: React.FC<Props> = (props) => {
  return (
    <Link href={props.path}>
      <a className="sidebar_element_text sidebar_element">{props.text}</a>
    </Link>
  );
};
