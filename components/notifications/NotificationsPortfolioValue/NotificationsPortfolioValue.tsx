import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import Link from "next/link";

interface Redux {
  money: number;
}

const NotifPortfolioValue: React.FC<Redux> = (props) => {
  return (
    <Link href="/portfolio">
      <a className="no_style notifications_link notifications_link_text">
        ${props.money}
      </a>
    </Link>
  );
};

export const NotificationsPortfolioValue = connect(mapStateToProps)(
  NotifPortfolioValue
);
