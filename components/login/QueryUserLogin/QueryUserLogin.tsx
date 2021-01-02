import React, { useState, useEffect } from "react";
import { useLazyQuery } from "react-apollo";
import { userLoginQuery } from "../../queries/queries";
import { comparePass } from "./index";
import styles from "./styles.module.scss";
var bcrypt = require("bcryptjs");

interface Props {
  username: string;
  password: string;
  loadingUser: () => void;
  renderPasswordNull: () => void;
  renderUsernameNull: () => void;
  passUserAuth: (id: string) => void;
}

export const QueryUserLogin: React.FC<Props> = (props) => {
  const [delay, setDelay] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [getUser, { loading, data, error }] = useLazyQuery(userLoginQuery, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (data) {
      checkValid();
    }
  }, [data]);

  function initialLogin() {
    setTimeout(() => {
      let lowerCaseUsername = props.username.toLowerCase();
      // console.log(lowerCaseUsername);
      getUser({
        variables: {
          username: lowerCaseUsername,
        },
      });
    }, delay);
  }

  function checkValid() {
    if (props.username.length > 0 && props.password.length > 0) logIn();
    if (props.username.length === 0) props.renderUsernameNull();
    if (props.password.length === 0) props.renderPasswordNull();
  }

  function logIn() {
    setTimeout(() => {
      if (data) {
        // console.log("props.password:" + props.password);
        // console.log("data.userLogin.hash:" + data.userLogin.hash);
        console.log(data);
        if (data.userLogin) {
          bcrypt.compare(
            props.password,
            data.userLogin.hash,
            (err, isMatch) => {
              comparing(isMatch);
            }
          );
        }
      }
    }, delay);
  }

  function comparing(compared: boolean) {
    console.log("compared passed");
    if (compared === true) {
      props.passUserAuth(data.userLogin.userId);
      props.loadingUser();
      console.log("compared true");
    } else if (compared === false) {
      console.log("compared false");
      let currentIncorrect = incorrectAnswers + 1;
      // setDelay(2 ** currentIncorrect * 1000);
      setIncorrectAnswers(currentIncorrect);
    }
  }

  return (
    <button className={styles.button} onClick={() => initialLogin()}>
      Sign In
    </button>
  );
};
