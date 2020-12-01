import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { pushCommentTutorialMutation } from "../../queries/queries";
import { taggedUsers } from "./index";
import styles from "./styles.module.scss";

interface Props {
  id: string;
  successfulPost: () => void;
  pushCommentTutorialMutation: (variables: object) => any;
}

const CommentSectionInputMutation: React.FC<Props> = (props) => {
  const [text, setText] = useState("");

  function passData() {
    let token = sessionStorage.getItem("Token");

    let taggedArr = taggedUsers(text);

    if (text.length > 0) {
      props
        .pushCommentTutorialMutation({
          variables: {
            token: token,
            text: text,
            id: props.id,
            taggedUsers: taggedArr,
          },
        })
        .catch((err: string) => {
          console.log(err);
        })
        .then(() => {
          setText("");
        });
    }
  }

  return (
    <div className={styles.comment_section_input}>
      <textarea
        className={styles.comment_section_textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className={styles.comment_section_button}
        onClick={() => passData()}
      >
        Submit
      </button>
    </div>
  );
};

export const CommentSectionInput = compose(
  graphql(pushCommentTutorialMutation, { name: "pushCommentTutorialMutation" })
)(CommentSectionInputMutation);
