import React from "react";
import { UnfollowUser } from "../UnfollowUser/UnfollowUser";
import Link from "next/link";
import "./styles.module.scss";

interface Props {
  userId: string;
  username: string;
  bio: string;
}

export const FollowingElement: React.FC<Props> = (props) => {
  return (
    <div className="homepage_block_component">
      <Link href={`/home/user/${props.userId}`}>
        <p className="block_link element_username">{props.username}</p>
      </Link>
      <p className="following_element_descriptor">{props.bio}</p>
      <UnfollowUser userId={props.userId} />
    </div>
  );
};
