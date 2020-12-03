import React from "react";
import Link from "next/link";

interface User {
  username: string;
  profileImage: string;
  userId: string;
  bio: string;
}

interface Stock {
  title: string;
  ticker: string;
  stockId: string;
  description: string;
  country: string;
}

export const QueryUserResult: React.FC<User> = (props) => {
  return (
    <Link href={`/user/${props.userId}`} passHref>
      <PushToUser
        username={props.username}
        profileImage={props.profileImage}
        bio={props.bio}
        userId={props.userId}
      />
    </Link>
  );
};

const PushToUser = React.forwardRef(
  ({ onClick, href, username, profileImage, bio, userId }, ref) => {
    return (
      <React.Fragment>
        <a href={`/user/${userId}`} onClick={onClick} ref={ref}>
          <h2>{username}</h2>
          <img src={profileImage} />
          <h3>{bio}</h3>
        </a>
      </React.Fragment>
    );
  }
);

export const QueryStockResult: React.FC<Stock> = (props) => {
  return (
    <React.Fragment>
      <p>
        {props.title} #{props.ticker}
      </p>
      <p>{props.country}</p>
      <p>{props.description}</p>
    </React.Fragment>
  );
};
