import React from "react";
import { NeedNewAccount } from "../NeedNewAccount/NeedNewAccount";
import { AlreadyMember } from "../AlreadyMember/AlreadyMember";
import styles from "./styles.module.scss";

interface Props {
  newAccount: boolean;
  triggerNewAccount: () => void;
}

export const RenderAccountLink: React.FC<Props> = (props) => {
  function checkNewAccount() {
    if (props.newAccount === false) {
      return <NeedNewAccount triggerNewAccount={props.triggerNewAccount} />;
    } else {
      return <AlreadyMember triggerNewAccount={props.triggerNewAccount} />;
    }
  }

  return <div className={styles.render_account_link}>{checkNewAccount()}</div>;
};
