import React, { useState, useEffect } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateAllowCommentsMutation } from "../../../queries/queries.js";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../actions/actions";
import styles from "./styles.module.scss";

interface Redux {
  allowCommentsOnPosts: boolean;
}

interface Props extends Redux {
  modAllowComments?: (allowCommentsOnPosts: boolean) => void;
  updateAllowCommentsMutation: (variables: object) => any;
}

const AllowCommentsRender: React.FC<Props> = (props) => {
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
      .then(() => {
        setAllowChecked(!allowChecked);
        if (props.modAllowComments) props.modAllowComments(!allowChecked);
      });
  }

  return (
    <div className={styles.allow_comments}>
      <input
        type="checkbox"
        checked={allowChecked}
        onChange={() => updateAllowComments()}
      />
      <label className={styles.text}>Allow Comments on Posts</label>
    </div>
  );
};

const AllowCommentsMutation = compose(
  graphql(updateAllowCommentsMutation, { name: "updateAllowCommentsMutation" })
)(AllowCommentsRender);

export const AllowComments = connect(mapStateToProps)(AllowCommentsMutation);
