import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updatePostMutation } from "../../queries/queries.js";

interface Props {
  title: string;
  text: string;
  postId: string;
  updatePostMutation: (variables: object) => any;
}

const SaveButtonMutation: React.FC<Props> = (props) => {
  function save() {
    let token = sessionStorage.getItem("Token");
    if (token) {
      props
        .updatePostMutation({
          variables: {
            title: props.title,
            text: props.text,
            postId: props.postId,
            token: token,
          },
        })
        .catch((err: any) => console.log(err))
        .then((res: any) => console.log(res));
    }
  }

  return <button onClick={() => save()}>Save</button>;
};

export const SaveButton = compose(
  graphql(updatePostMutation, { name: "updatePostMutation" })
)(SaveButtonMutation);
