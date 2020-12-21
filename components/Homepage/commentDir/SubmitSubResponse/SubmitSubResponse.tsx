import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushCommentNestMutation } from "../../../queries/queries";
import styles from "./styles.module.scss";

interface Props {
  postId: string;
  commentId: string;
  text: string;
  successful: () => void;
  pushCommentNestMutation: (variables: object) => any;
}

const SubmitSubResponseMutation: React.FC<Props> = (props) => {
  function submit() {
    if (props.text.length < 150 && props.text.length > 0) {
      props
        .pushCommentNestMutation({
          variables: {
            token: sessionStorage.getItem("Token"),
            postId: props.postId,
            commentId: props.commentId,
            text: props.text,
          },
        })
        .catch((err: any) => console.log(err))
        .then((res: any) => {
          console.log(res);
          props.successful();
        });
    }
  }

  return (
    <button className={styles.button} onClick={() => submit()}>
      Submit
    </button>
  );
};

export const SubmitSubResponse = compose(
  graphql(pushCommentNestMutation, { name: "pushCommentNestMutation" })
)(SubmitSubResponseMutation);
