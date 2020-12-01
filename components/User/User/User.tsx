import React from "react";
import { Header } from "../Header/Header";
import { UserInformation } from "../UserInformation/UserInformation";
import styles from "./styles.module.scss";

interface Props {
  user: string;
  userId: number;
  netWorth: number;
  timeInMarket: number;
}

export const User: React.FC<Props> = (props) => {
  return (
    <div className={styles.user}>
      <Header text={props.user} />
      <UserInformation
        user={props.user}
        netWorth={props.netWorth}
        timeInMarket={props.timeInMarket}
      />
    </div>
  );
};
