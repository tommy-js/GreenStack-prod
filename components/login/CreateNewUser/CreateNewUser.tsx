import React, { useState, useEffect } from "react";
import { graphql, useLazyQuery } from "react-apollo";
import { flowRight as compose } from "lodash";
import { useRouter } from "next/router";
import {
  createUserMutation,
  distinctUserQuery,
} from "../../queries/queries.js";
import styles from "./styles.module.scss";

interface Props {
  username: string;
  password: string;
  passObjectUp: (passwordEffective: any) => void;
  createUserMutation: (variables: object) => any;
  alreadyExists: (val: boolean) => void;
  renderUsernameNull: () => void;
  renderPasswordNull: () => void;
}

const CreateNewUserMutation: React.FC<Props> = (props) => {
  const [newUsername, setNewUsername] = useState(false);
  const router = useRouter();
  const [callUser, { data }] = useLazyQuery(distinctUserQuery, {
    variables: { username: props.username },
  });

  const [passwordEffective, setPasswordEffective] = useState({
    greaterThan8: false,
    lessThan64: false,
    includesSpecial: false,
    includesCapital: false,
    includesNum: false,
  });

  function checkValidity() {
    let checkBool = checkTruth(passwordEffective);
    console.log("new username: " + newUsername + " checkBool: " + checkBool);
    if (props.username.length > 0 && props.password.length > 0) {
      if (newUsername === true && checkBool === true) {
        submitButton();
      }
    } else if (props.username.length === 0 && props.password.length != 0) {
      props.renderUsernameNull();
    } else if (props.password.length === 0 && props.username.length != 0) {
      props.renderPasswordNull();
    } else {
      props.renderUsernameNull();
      props.renderPasswordNull();
    }
  }

  function checkTruth(obj: any) {
    for (let i in obj) {
      if (!obj[i]) return false;
    }
    return true;
  }

  // Checks for username in the database
  useEffect(() => {
    if (data) {
      console.log(data);
      if (data.specUser) {
        setNewUsername(false);
        props.alreadyExists(true);
      } else {
        setNewUsername(true);
        props.alreadyExists(false);
      }
    }
  }, [data]);

  // Checks for capitalization in the provided password
  function testedCap(pass: string) {
    let password = pass.toLowerCase();
    let checkPass = pass;
    let bool = false;
    if (password !== checkPass) {
      bool = true;
    }
    return bool;
  }

  useEffect(() => {
    console.log(newUsername);
    callUser();

    let testedSpecial = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(
      props.password
    );

    function under64() {
      if (props.password.length <= 64) return true;
      else return false;
    }

    function greater8() {
      if (props.password.length >= 8) return true;
      else return false;
    }

    let test64 = under64();
    let test8 = greater8();

    let testedNum = /[0-9]/g.test(props.password);
    let testedCapital = testedCap(props.password);

    setPasswordEffective({
      greaterThan8: test8,
      lessThan64: test64,
      includesCapital: testedCapital,
      includesSpecial: testedSpecial,
      includesNum: testedNum,
    });

    let passObj = {
      greaterThan8: test8,
      lessThan64: test64,
      includesCapital: testedCapital,
      includesSpecial: testedSpecial,
      includesNum: testedNum,
    };

    props.passObjectUp(passObj);
  }, [props.password]);

  function submitButton() {
    props
      .createUserMutation({
        variables: {
          username: props.username,
          password: props.password,
        },
      })
      .then((res: any) => {
        sessionStorage.setItem("Token", res.data.createUser.token);
        router.push("/");
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  return (
    <button className={styles.button} onClick={() => checkValidity()}>
      Create Account
    </button>
  );
};

export const CreateNewUser = compose(
  graphql(createUserMutation, { name: "createUserMutation" })
)(CreateNewUserMutation);
