import React from "react";
import { returnDate } from "./index";
import "./styles.module.scss";

interface Props {
  timestamp: number;
}

export const NotifTime: React.FC<Props> = (props) => {
  return (
    <div id="submitted_notif_time">Submitted {returnDate(props.timestamp)}</div>
  );
};
