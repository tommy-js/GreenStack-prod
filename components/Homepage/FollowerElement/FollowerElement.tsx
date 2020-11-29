import React from "react";
import { BlockUser } from "../BlockUser/BlockUser";
import Link from "next/link";
import "./styles.module.scss";

interface Props {
  userId: string;
  username: string;
}

export const FollowerElement: React.FC<Props> = (props) => {
  return (
    <div className="homepage_block_component">
      <Link href={`/home/user/${props.userId}`}>
        <p className="block_link element_username">{props.username}</p>
      </Link>
      <p className="follower_element_descriptor">props.descriptor</p>
      <BlockUser followerId={props.userId} />
    </div>
  );
};
