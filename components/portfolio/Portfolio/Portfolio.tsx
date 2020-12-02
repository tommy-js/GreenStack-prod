import React, { useState, useEffect } from "react";
import { NavBar } from "../../navigation/NavBar/NavBar";
import { LoadingUser } from "../../login/Loading/Loading";
import UserLoginAuthSubresolver from "../../resolvers/UserLoginAuthSubresolver";
import { PortfolioBody } from "../PortfolioBody/PortfolioBody";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { returnStocks } from "./index";
import styles from "./styles.module.scss";

type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  color: string;
  ticker: string;
};

interface Redux {
  stocks: StockItem[];
}

const PortfolioRender: React.FC<Redux> = (props) => {
  const [loadingInUser, setLoadingInUser] = useState(false);
  const [userStocks, setUserStocks] = useState([] as any);

  useEffect(() => {
    if (status) {
      let arr = returnStocks(props.stocks);
      setUserStocks(arr);
    }
  }, []);

  function loggedIn() {
    setLoadingInUser(false);
  }

  function returnLoadingInUser() {
    if (loadingInUser === true) {
      return (
        <div
          className={`${styles.render_loading} ${styles.drop_loading_block}`}
        >
          <LoadingUser />
          <UserLoginAuthSubresolver loggedIn={loggedIn} />
        </div>
      );
    } else
      return (
        <React.Fragment>
          <NavBar />
          <div className={styles.portfolio}>
            <PortfolioBody />
          </div>
        </React.Fragment>
      );
  }

  return <React.Fragment>{returnLoadingInUser()}</React.Fragment>;
};

export const Portfolio = connect(mapStateToProps)(PortfolioRender);
