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
    <React.Fragment>
      <Link href={`/home/user/${props.userId}`}>
        <a>{props.username}</a>
      </Link>
      <h2>{props.username}</h2>
      <img src={props.profileImage} />
      <h3>{props.bio}</h3>
    </React.Fragment>
  );
};

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
