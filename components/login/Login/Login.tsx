import React, { useState, useEffect } from "react";
import { SigninPage } from "../SigninPage/SigninPage";
import { CreateAccountPage } from "../CreateAccountPage/CreateAccountPage";
import UserLoginAuthSubresolver from "../../resolvers/UserLoginAuthSubresolver";
import { RenderAccountLink } from "../RenderAccountLink/RenderAccountLink";
import {
  LoginPageFeedInfo,
  LoginPageLearnInfo,
  LoginPageCommunityInfo,
} from "../LoginPageInfo/LoginPageInfo";
import { InfoHeader } from "../InfoHeader/InfoHeader";
import { LearnMore } from "../LearnMore/LearnMore";
import { LoginLogo } from "../LoginLogo/LoginLogo";
import { returnLoggedInQuery } from "../../queries/queries";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../components/actions/actions";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";

interface Redux {
  status: boolean;
  returnLoggedInQuery: (variables: object) => any;
  onStatusSet: (status: boolean) => void;
}

const LoginRender: React.FC<Redux> = (props) => {
  const [userId, setUserId] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [loadingInUser, setLoadingInUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (props.status === false) setLoadingInUser(true);
  }, [props.status]);

  // useEffect(() => {
  //   let sessionToken = sessionStorage.getItem("Token");
  //   if (data && data.token) {
  //     console.log(data.token);
  //     if (data.token.token === sessionToken) {
  //       console.log(data);
  //       props.onStatusSet(true);
  //       setUserId(data.token.userid);
  //       setLoadingInUser(true);
  //     }
  //   }
  // }, data);

  function passUserAuth(id: string) {
    setUserId(id);
    props
      .returnLoggedInQuery({
        variables: {
          userId: id,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        setUserId(id);
        setLoadingInUser(true);
        sessionStorage.setItem("Token", res.data.returnLoggedIn.token);
        console.log(sessionStorage.getItem("Token"));
      });
  }

  useEffect(() => {
    console.log(userId);
  }, [userId]);

  function triggerNewAccount() {
    if (newAccount === true) setNewAccount(false);
    else setNewAccount(true);
  }

  function modLoadingUser() {
    setLoadingInUser(true);
  }

  function loggedIn() {
    router.push("/");
  }

  function renderLoadingFalse() {
    setLoadingInUser(false);
  }

  function displayBlock() {
    if (loadingInUser === false) {
      if (newAccount === false) {
        return (
          <div className={styles.login_forms}>
            <SigninPage
              loadingUser={modLoadingUser}
              passUserAuth={passUserAuth}
            />
            <RenderAccountLink
              newAccount={newAccount}
              triggerNewAccount={triggerNewAccount}
            />
          </div>
        );
      } else
        return (
          <CreateAccountPage
            newAccount={newAccount}
            triggerNewAccount={triggerNewAccount}
          />
        );
    } else {
      return (
        <UserLoginAuthSubresolver
          loggedIn={loggedIn}
          renderLoadingFalse={renderLoadingFalse}
        />
      );
    }
  }

  return (
    <div className={styles.login_page}>
      <div className={styles.centered_login_page}>
        <LoginLogo />
        {displayBlock()}
      </div>
      <div className={styles.login_page_about}>
        <InfoHeader />
        <LoginPageFeedInfo />
        <LoginPageCommunityInfo />
        <LoginPageLearnInfo />
        <LearnMore />
      </div>
    </div>
  );
};

const LoginReducer = connect(mapStateToProps, mapDispatchToProps)(LoginRender);

export const Login = compose(
  graphql(returnLoggedInQuery, { name: "returnLoggedInQuery" })
)(LoginReducer);
