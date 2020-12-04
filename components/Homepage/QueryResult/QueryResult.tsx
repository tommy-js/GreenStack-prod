import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

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
        <a
          className={styles.link}
          href={`/user/${userId}`}
          onClick={onClick}
          ref={ref}
        >
          <div className={styles.container}>
            <div className={styles.header_block}>
              <h2 className={styles.header}>{username}</h2>
              <div className={styles.image_container}>
                <img className={styles.image} src={profileImage} />
              </div>
            </div>
            <h3 className={styles.bio}>{bio}</h3>
          </div>
        </a>
      </React.Fragment>
    );
  }
);

export const QueryStockResult: React.FC<Stock> = (props) => {
  return (
    <Link href={`/stock/${props.stockId}`} passHref>
      <PushToStock
        title={props.title}
        ticker={props.ticker}
        country={props.country}
        description={props.description}
        stockId={props.stockId}
      />
    </Link>
  );
};

const PushToStock = React.forwardRef(
  ({ onClick, href, title, ticker, country, description, stockId }, ref) => {
    return (
      <React.Fragment>
        <a href={`/stock/${stockId}`} onClick={onClick} ref={ref}>
          <p>
            {title} #{ticker}
          </p>
          <p>{country}</p>
          <p>{description}</p>
        </a>
      </React.Fragment>
    );
  }
);
