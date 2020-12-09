import React, { useState, useEffect } from "react";
import { graphql, useLazyQuery } from "react-apollo";
import { flowRight as compose } from "lodash";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../components/actions/actions";
import { useRouter } from "next/router";
import {
  createUserMutation,
  distinctUserQuery,
} from "../../queries/queries.js";
import styles from "./styles.module.scss";

interface Redux {
  onNewAccountSet: (newacc: boolean) => void;
}

interface Props extends Redux {
  queryUsername: string;
  password: string;
  passObjectUp: (passwordEffective: any) => void;
  createUserMutation: (variables: object) => any;
  alreadyExists: (val: boolean) => void;
  renderUsernameNull: () => void;
  renderPasswordNull: () => void;
}

const CreateNewUserMutation: React.FC<Props> = (props) => {
  const [newUsername, setNewUsername] = useState(false);
  const [spaceIncluded, setSpaceIncluded] = useState(false);
  const router = useRouter();
  const [callUser, { data }] = useLazyQuery(distinctUserQuery, {
    variables: { username: props.queryUsername },
  });

  const [passwordEffective, setPasswordEffective] = useState({
    greaterThan8: false,
    lessThan64: false,
    includesSpecial: false,
    includesCapital: false,
    includesNum: false,
  });

  function renderSpaceIncluded() {
    if (spaceIncluded === true) {
      return (
        <p className={styles.space_included}>*Password cannot include spaces</p>
      );
    } else return null;
  }

  function checkValidity() {
    let checkBool = checkTruth(passwordEffective);
    let passwordTest = / /g.test(props.password);
    if (props.queryUsername.length > 0 && props.password.length > 0) {
      if (
        newUsername === true &&
        checkBool === true &&
        passwordTest === false
      ) {
        submitButton();
      }
    } else if (props.queryUsername.length === 0 && props.password.length != 0) {
      props.renderUsernameNull();
    } else if (props.password.length === 0 && props.queryUsername.length != 0) {
      props.renderPasswordNull();
    } else {
      props.renderUsernameNull();
      props.renderPasswordNull();
    }
    if (passwordTest === true) {
      setSpaceIncluded(true);
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
          username: props.queryUsername,
          password: props.password,
        },
      })
      .then((res: any) => {
        sessionStorage.setItem("Token", res.data.createUser.token);
        props.onNewAccountSet(true);
        router.push("/");
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  return (
    <div>
      <button className={styles.button} onClick={() => checkValidity()}>
        Create Account
      </button>
      {renderSpaceIncluded()}
    </div>
  );
};

const CreateNewUserRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewUserMutation);

export const CreateNewUser = compose(
  graphql(createUserMutation, { name: "createUserMutation" })
)(CreateNewUserRedux);
