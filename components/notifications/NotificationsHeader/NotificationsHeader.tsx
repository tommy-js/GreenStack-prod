import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import Link from "next/link";

interface Redux {
  username: string;
}

const NotificationsHead: React.FC<Redux> = (props) => {
  return (
    <Link href="/home/profile">
      <a className="no_style notifications_link_text">{props.username}</a>
    </Link>
  );
};

export const NotificationsHeader = connect(mapStateToProps)(NotificationsHead);
