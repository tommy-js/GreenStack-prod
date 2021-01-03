import React, { useState, useEffect } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import {
  updateDarkModeMutation,
  updateInvisibleMutation,
  updateAllowCommentsMutation,
} from "../../queries/queries.js";
import styles from "./styles.module.scss";

interface Props {
  darkmode: boolean;
  allowCommentsOnPosts: boolean;
  invisible: boolean;
  modDarkMode: (darkmode: boolean) => void;
  modPrivate: (invisible: boolean) => void;
  modAllowComments: (allowCommentsOnPosts: boolean) => void;
  updateAllowCommentsMutation: (variables: object) => any;
  updateDarkModeMutation: (variables: object) => any;
  updateInvisibleMutation: (variables: object) => any;
}

const UserSettingsMutations: React.FC<Props> = (props) => {
  const [darkmodeChecked, setDarkmodeChecked] = useState(props.darkmode);
  const [invisibleChecked, setInvisibleChecked] = useState(props.invisible);
  const [allowChecked, setAllowChecked] = useState(props.allowCommentsOnPosts);

  useEffect(() => {
    setAllowChecked(props.allowCommentsOnPosts);
  }, [props.allowCommentsOnPosts]);

  function updateAllowComments() {
    props
      .updateAllowCommentsMutation({
        variables: {
          token: sessionStorage.getItem("Token"),
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        setAllowChecked(!allowChecked);
        props.modAllowComments(!allowChecked);
        console.log(res);
      });
  }

  useEffect(() => {
    setInvisibleChecked(props.invisible);
  }, [props.invisible]);

  function updateInvisible() {
    props
      .updateInvisibleMutation({
        variables: {
          token: sessionStorage.getItem("Token"),
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        setInvisibleChecked(!invisibleChecked);
        props.modPrivate(!invisibleChecked);
        console.log(res);
      });
  }

  useEffect(() => {
    setDarkmodeChecked(props.darkmode);
  }, [props.darkmode]);

  function updateDarkMode() {
    props
      .updateDarkModeMutation({
        variables: {
          token: sessionStorage.getItem("Token"),
        },
      })
      .catch((err: any) => console.log(err))
      .then(() => {
        setDarkmodeChecked(!darkmodeChecked);
        props.modDarkMode(!darkmodeChecked);
      });
  }

  return (
    <React.Fragment>
      <div className={styles.input_box}>
        <input
          type="checkbox"
          className={styles.input}
          checked={darkmodeChecked}
          onChange={() => updateDarkMode()}
        />
        <label className={styles.label}>Dark Mode</label>
      </div>

      <div className={styles.input_box}>
        <input
          type="checkbox"
          className={styles.input}
          checked={invisibleChecked}
          onChange={() => updateInvisible()}
        />
        <label className={styles.label}>Private Account</label>
      </div>

      <div className={styles.input_box}>
        <input
          type="checkbox"
          className={styles.input}
          checked={allowChecked}
          onChange={() => updateAllowComments()}
        />
        <label className={styles.label}>Allow Comments</label>
      </div>
    </React.Fragment>
  );
};

const MutateUserDarkMode = compose(
  graphql(updateDarkModeMutation, { name: "updateDarkModeMutation" })
)(UserSettingsMutations);

const MutateUserInvisible = compose(
  graphql(updateInvisibleMutation, { name: "updateInvisibleMutation" })
)(MutateUserDarkMode);

export const MutateUserSettings = compose(
  graphql(updateAllowCommentsMutation, { name: "updateAllowCommentsMutation" })
)(MutateUserInvisible);
