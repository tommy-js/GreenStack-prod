import React, { useState, useEffect } from "react";
import { CompanyCommentMap } from "../CompanyCommentMap/CompanyCommentMap";
import { LoadingComments } from "../LoadingComments/LoadingComments";
import { LoadNew } from "../LoadNew/LoadNew";
import { useQuery } from "react-apollo";
import { stockQuery, addCommentStockMutation } from "../../queries/queries";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { returnSortedComments } from "./index";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  ticker: string;
  stockId: string;
  addCommentStockMutation: (variables: object) => any;
}
const CompanyCommentsRender: React.FC<Props> = (props) => {
  const [text, setText] = useState("");
  const { data } = useQuery(stockQuery, {
    variables: { stockId: props.stockId },
    pollInterval: 500,
    fetchPolicy: "network-only",
  });
  const [comments, setComments] = useState([] as any);
  const [moddedComs, setModdedComs] = useState([] as any);
  const [altered, setAltered] = useState(false);

  useEffect(() => {
    if (data) {
      let coms = returnSortedComments(data.stock.comments);
      if (comments.length === 0) {
        setModdedComs(coms);
        setComments(coms);
      } else setModdedComs(coms);
    }
  }, [data]);

  useEffect(() => {
    if (comments === moddedComs) setAltered(false);
    else setAltered(true);
  }, [moddedComs]);

  function loadMore() {
    setComments(moddedComs);
    setAltered(false);
  }

  function pushData() {
    let token = sessionStorage.getItem("Token");
    props
      .addCommentStockMutation({
        variables: {
          stockId: props.stockId,
          token: token,
          text: text,
        },
      })
      .then(() => {
        setText("");
      })
      .catch((err: any) => console.log(err));
  }

  function returnButtonNew() {
    if (altered === true) {
      return <LoadNew loadMore={loadMore} />;
    } else return null;
  }

  function returnCompanyComments() {
    if (data && comments.length > 0) {
      return <CompanyCommentMap comments={comments} />;
    } else return <LoadingComments />;
  }

  return (
    <div className={styles.comment_component}>
      <textarea
        className={styles.comment_textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.button} onClick={() => pushData()}>
        Submit
      </button>
      {returnButtonNew()}
      {returnCompanyComments()}
    </div>
  );
};

export const CompanyComments = compose(
  graphql(addCommentStockMutation, { name: "addCommentStockMutation" })
)(CompanyCommentsRender);
