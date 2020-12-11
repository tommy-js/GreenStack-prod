import React from "react";
import { NotifTime } from "../NotifTime/NotifTime";
import { NotificationItem } from "../../types/types";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import { connect } from "react-redux";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { dropNotificationMutation } from "../../queries/queries";
import styles from "./styles.module.scss";
const checkmark = require("../../../public/checkmark.png");

interface Redux {
  notifications: NotificationItem[];
  onInitialNotificationsSet: (notifications: NotificationItem[]) => void;
  dropNotificationMutation: (variables: object) => any;
}

interface Props extends Redux {
  content: string;
  timestamp: number;
  id: string;
}

const NotifMutation: React.FC<Props> = (props) => {
  function successfulDrop(id: string) {
    let notifsArr = [...props.notifications];
    let foundInd = notifsArr.find((el: any) => el.id === id);
    if (foundInd) {
      let index = notifsArr.indexOf(foundInd);
      notifsArr.splice(index, 1);
      props.onInitialNotificationsSet(notifsArr);
    }
  }

  function dropNotification() {
    let token = sessionStorage.getItem("Token");
    props
      .dropNotificationMutation({
        variables: {
          token: token,
          id: props.id,
        },
      })
      .then(() => {
        successfulDrop(props.id);
      })
      .catch((err: any) => console.log(err));
  }

  return (
    <div className={styles.notif}>
      <p className={styles.notif_content}>{props.content}</p>
      <div onClick={() => dropNotification()} className={styles.check_img_box}>
        <img src={checkmark} className={styles.check_img} />
      </div>
      <NotifTime timestamp={props.timestamp} />
    </div>
  );
};

const NotifMap = connect(mapStateToProps, mapDispatchToProps)(NotifMutation);

export const Notif = compose(
  graphql(dropNotificationMutation, { name: "dropNotificationMutation" })
)(NotifMap);
