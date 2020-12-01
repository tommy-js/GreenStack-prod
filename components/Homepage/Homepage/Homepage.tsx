import React, { useState, useEffect } from "react";
import { FeedSidebar } from "../../../components/Homepage/sidebar/FeedSidebar/FeedSidebar";
import { NavBar } from "../../../components/navigation/NavBar/NavBar";
import { PortfolioValuePostModal } from "../../../components/Homepage/PortfolioValuePostModal/PortfolioValuePostModal";
import UserLoginAuthSubresolver from "../../../components/resolvers/UserLoginAuthSubresolver";
import { Feed } from "../feed/Feed/Feed";
import { useLazyQuery, useQuery } from "react-apollo";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../components/actions/actions";
import {
  userQuery,
  nonTokenModifyUserQuery,
  getStocksQuery,
} from "../../../components/queries/queries";
import {
  PostItem,
  FeedItem,
  FollowerItem,
  FollowingItem,
  WatchListItem,
} from "../../../components/types/types";
import { companySort } from "./index";
import styles from "./styles.module.scss";

interface Redux {
  userId: string;
  username: string;
  posts: PostItem[];
  feed: FeedItem[];
  userRoutes: any;
  money: number;
  status: boolean;
  onInitialPostsSet: (posts: any) => void;
  onInitialFollowerSet: (followers: FollowerItem[]) => void;
  onInitialFollowingSet: (following: FollowingItem[]) => void;
  onInitialNotificationsSet: (notifications: any) => void;
  onWatchlistSet: (watchlist: WatchListItem[]) => void;
  onUserRouteSet: (userRoutes: any) => void;
}

const HomepageRender: React.FC<Redux> = (props) => {
  const [loadingInUser, setLoadingInUser] = useState(false);
  const [companies, setCompanies] = useState([] as any);
  const [technology, setTechnology] = useState([] as any);
  const [manufacturing, setManufacturing] = useState([] as any);
  const [energy, setEnergy] = useState([] as any);
  const [results, setResults] = useState({} as any);
  const router = useRouter();

  const { data: companyData } = useQuery(getStocksQuery);
  const [passToken, { data }] = useLazyQuery(userQuery);
  const [getUser, { data: getUserData }] = useLazyQuery(
    nonTokenModifyUserQuery,
    {
      pollInterval: 500,
    }
  );

  useEffect(() => {
    if (companyData) {
      let companies = companyData.getStocks;
      setCompanies(companies);
      let sortedCompanies = companySort(companyData.getStocks);
      setTechnology(sortedCompanies.tech);
      setManufacturing(sortedCompanies.manu);
      setEnergy(sortedCompanies.energ);
    }
  }, [companyData]);

  useEffect(() => {
    console.log("Homepage status: " + props.status);
    if (props.status === false) setLoadingInUser(true);
  }, [props.status]);

  useEffect(() => {
    if (getUserData) {
      props.onInitialPostsSet(getUserData.noTokenMod.posts);
      props.onInitialFollowerSet(getUserData.noTokenMod.followers);
      props.onInitialFollowingSet(getUserData.noTokenMod.following);
      props.onInitialNotificationsSet(getUserData.noTokenMod.notifications);
      props.onWatchlistSet(getUserData.noTokenMod.watchlist);
    }
  }, [getUserData]);

  useEffect(() => {
    if (props.status === false) {
      if (data && data.token) setLoadingInUser(true);
    }
  }, data);

  function loggedIn() {
    setLoadingInUser(false);
  }

  function modRes(searchData: any, dataType: number) {
    let arr: any[] = props.userRoutes;
    let obj;
    if (dataType === 0) {
      obj = {
        username: searchData.username,
        userId: searchData.userId,
        profileImage: searchData.profileImage,
        bio: searchData.bio,
        dataType: dataType,
      };
      let findEl = props.userRoutes.find(
        (el: any) => el.userId === searchData.userId
      );
      if (!findEl) {
        arr.push(obj);
        let routes = [...props.userRoutes, obj];
        props.onUserRouteSet(routes);
      }
    } else if (dataType === 1) {
      obj = {
        title: searchData.title,
        ticker: searchData.ticker,
        description: searchData.description,
        country: searchData.country,
        stockId: searchData.stockId,
        dataType: dataType,
      };
      let findEl = props.userRoutes.find(
        (el: any) => el.userId === searchData.stockId
      );
      if (!findEl) {
        arr.push(obj);
        let routes = [...props.userRoutes, obj];
        props.onUserRouteSet(routes);
      }
    }

    setResults(obj);
    router.push("/home/search");
  }

  const [postingToFeed, setPostingToFeed] = useState(false);

  function renderShowPostOptions() {
    if (postingToFeed === true)
      return (
        <PortfolioValuePostModal
          setPostingToFeed={() => setPostingToFeed(false)}
        />
      );
    else return null;
  }

  function returnLoadingIcon() {
    if (props.status === true) {
      return (
        <div>
          <NavBar />
          <div className={styles.homepage}>
            {renderShowPostOptions()}
            <FeedSidebar
              modRes={modRes}
              setPostingToFeed={() => setPostingToFeed(true)}
            />
          </div>
        </div>
      );
    }
  }

  function returnLoading() {
    if (loadingInUser === true) {
      return (
        <div
          className={`${styles.render_loading} ${styles.drop_loading_block}`}
        >
          <UserLoginAuthSubresolver loggedIn={loggedIn} />
        </div>
      );
    } else if (loadingInUser === false)
      return (
        <React.Fragment>
          {returnLoadingIcon()}
          <Feed />
        </React.Fragment>
      );
  }

  return <div>{returnLoading()}</div>;
};

export const Homepage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageRender);
