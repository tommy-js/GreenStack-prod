import React, { useEffect } from "react";
import { LoadingGeneral } from "../login/Loading/Loading";
import { userQuery } from "../queries/queries";
import { useLazyQuery } from "react-apollo";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../actions/actions";

interface Redux {
  onStatusSet: (status: boolean) => void;
  onUsernameSet: (username: string) => void;
  onUserIDSet: (userId: string) => void;
  onBioSet: (bio: string) => void;
  onWatchlistSet: (watchlist: any) => void;
  onLikesSet: (likes: any) => void;
  onDislikesSet: (dislikes: any) => void;
  onMoneySet: (money: number) => void;
  onNewAccountSet: (newaccount: boolean) => void;
  onNewPortfolioSet: (newPortfolio: boolean) => void;
  onDarkmodeSet: (darkmode: boolean) => void;
  onInvisibleSet: (invisible: boolean) => void;
  onAllowCommentsSet: (allowCommentsOnPosts: boolean) => void;
  onInitialFollowerSet: (followers: any) => void;
  onInitialFollowingSet: (following: any) => void;
  onStocksSet: (stocks: any) => void;
  onInitialPostsSet: (posts: any) => void;
  onProfileImageSet: (profileImage: any) => void;
  onInitialNotificationsSet: (notifications: any) => void;
  onInitialCommentsSet: (comments: any) => void;
  onInitialProgressSet: (progress: any) => void;
  onInitialProgressElementsSet: (progressElements: any) => void;
  onUserRouteSet: (userRoutes: any) => void;
  onUserHistorySet: (userHistory: any) => void;
  onTutorialScoresSet: (tutorialScore: any) => void;
}

interface Props extends Redux {
  loggedIn: () => void;
  renderLoadingFalse?: () => void;
}

const UserLoginAuthSubresolver: React.FC<Props> = (props) => {
  const [logUserIn, { data: dataLogIn }] = useLazyQuery(userQuery);
  const router = useRouter();

  useEffect(() => {
    let token = sessionStorage.getItem("Token");
    if (token) {
      logUserIn({
        variables: {
          token: token,
        },
      });
    } else {
      if (props.renderLoadingFalse) props.renderLoadingFalse();
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    if (dataLogIn) pushToUser();
  }, [dataLogIn]);

  function pushToUser() {
    if (dataLogIn && dataLogIn.user) {
      let user: any = dataLogIn.user;
      console.log(dataLogIn.user);

      let progs = getProgEls(user);

      let progress = getProgs(user);

      let hist = [...user.posts, ...user.likes, ...user.dislikes];

      props.onStatusSet(true);
      props.onUsernameSet(user.username);
      props.onUserIDSet(user.userId);
      props.onBioSet(user.bio);
      props.onWatchlistSet(user.watchlist);
      props.onLikesSet(user.likes);
      props.onDislikesSet(user.dislikes);
      props.onMoneySet(user.money);
      props.onNewAccountSet(user.newUser.newLog);
      props.onNewPortfolioSet(user.newUser.newPortfolio);
      props.onDarkmodeSet(user.darkmode);
      props.onInvisibleSet(user.invisible);
      props.onAllowCommentsSet(user.allowCommentsOnPosts);
      props.onInitialFollowerSet(user.followers);
      props.onInitialFollowingSet(user.following);
      props.onStocksSet(user.stocks);
      props.onInitialPostsSet(user.posts);
      props.onProfileImageSet(user.profileImage);
      props.onInitialNotificationsSet(user.notifications);
      props.onInitialCommentsSet(user.comments);
      props.onInitialProgressSet(progress);
      props.onInitialProgressElementsSet(progs);
      props.onUserRouteSet(returnUserRoutes(user));
      props.onUserHistorySet(hist);
      props.onTutorialScoresSet(user.tutorialScores);
      sessionStorage.setItem("Token", user.token);
    }
    props.loggedIn();
  }

  function getProgEls(user: any) {
    let progElements = [];
    for (let i = 0; i < user.progress.length; i++) {
      for (let j = 0; j < user.progress[i].progressElements.length; j++) {
        progElements.push(user.progress[i].progressElements[j]);
      }
    }
    return progElements;
  }

  function getProgs(user: any) {
    let prog = [];
    for (let i = 0; i < user.progress.length; i++) {
      let obj = {
        title: user.progress[i].title,
        id: user.progress[i].id,
        percent: user.progress[i].percent,
      };
      prog.push(obj);
    }
    return prog;
  }

  function returnUserRoutes(user: any) {
    let obj = {
      userId: user.userId,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage,
    };
    let arr = [obj];
    return arr;
  }

  return <LoadingGeneral />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginAuthSubresolver);
