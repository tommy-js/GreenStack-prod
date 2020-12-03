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
import Link from "next/link";
import { LearnMore } from "../LearnMore/LearnMore";
import { queryToken } from "../../queries/queries";
import { useLazyQuery } from "react-apollo";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../components/actions/actions";

interface Redux {
  status: boolean;
  onStatusSet: (status: boolean) => void;
}

const LoginRender: React.FC<Redux> = (props) => {
  const [userId, setUserId] = useState();
  const [newAccount, setNewAccount] = useState(false);
  const [loadingInUser, setLoadingInUser] = useState(false);
  const router = useRouter();

  const [passToken, { data }] = useLazyQuery(queryToken);

  useEffect(() => {
    if (props.status === false) setLoadingInUser(true);
  }, [props.status]);

  useEffect(() => {
    let sessionToken = sessionStorage.getItem("Token");
    if (data && data.token) {
      console.log(data.token);
      if (data.token.token === sessionToken) {
        props.onStatusSet(true);
        setUserId(data.token.userid);
        setLoadingInUser(true);
      }
    }
  }, data);

  function passUserAuth(id: number) {
    setUserId(id);
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
      <div className={styles.centered_login_page}>{displayBlock()}</div>
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

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginRender);
