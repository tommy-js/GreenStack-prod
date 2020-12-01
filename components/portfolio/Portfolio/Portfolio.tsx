import React, { useState, useEffect, useContext } from "react";
import { NavBar } from "../../navigation/NavBar/NavBar";
import { LoadingUser } from "../../login/Loading/Loading";
import UserLoginAuthSubresolver from "../../resolvers/UserLoginAuthSubresolver";
import { PortfolioBody } from "../PortfolioBody/PortfolioBody";
import Router from "next/router";
import { queryToken } from "../../queries/queries";
import { useLazyQuery } from "react-apollo";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { returnStocks } from "./index";

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
  const [token, setToken] = useState();
  const [userStocks, setUserStocks] = useState([] as any);

  const [passToken, { data }] = useLazyQuery(queryToken);

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
        <div className="render_loading drop_loading_block">
          <LoadingUser />
          <UserLoginAuthSubresolver loggedIn={loggedIn} />
        </div>
      );
    } else
      return (
        <React.Fragment>
          <NavBar />
          <div id="portfolio">
            <PortfolioBody />
          </div>
        </React.Fragment>
      );
  }

  return <React.Fragment>{returnLoadingInUser()}</React.Fragment>;
};

export const Portfolio = connect(mapStateToProps)(PortfolioRender);
