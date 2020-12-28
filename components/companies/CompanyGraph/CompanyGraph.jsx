import React, { useState, useEffect, useRef, createRef } from "react";
import { LoadingGeneral } from "../../login/Loading/Loading.tsx";
import { renderFull } from "stock-graphics";
import { useQuery } from "react-apollo";
import { requestDataSetQuery } from "../../queries/queries.js";
import styles from "./styles.module.scss";

export const CompanyGraph = ({ title, ticker }) => {
  let arr = [];
  let tickers = arr.push(ticker);
  const reference = createRef();
  const [loaded, setLoaded] = useState(false);
  const [points, setPoints] = useState([]);
  const { data, loading } = useQuery(requestDataSetQuery, {
    variables: { tickers: arr },
  });

  useEffect(() => {
    if (data) setPoints(data.requestData[0].elements);
  }, [data]);

  useEffect(() => {
    if (points && points.length > 0) renderEl();
  }, [points]);

  function renderEl() {
    const graphicalEffects = {
      graphHeight: "100%",
      graphWidth: "80%",
      graphLeft: 0,
      graphRight: 0,
      positioning: "auto",
      title: ``,
      ticker: ``,
      fontSize: 18,
      backgroundColor: "white",
      lineWidth: 5,
      boundaryWidth: 3,
      gainColor: "green",
      lossColor: "red",
      fillColor: "red",
      dateRangeActive: false,
      graphFontSize: 14,
      infoDivWidth: 100,
      buttonSize: { width: 40, height: 25 },
      buttonFontSize: 10,
      indexed: [0, 0],
      indexedArray: [{ a: 0, b: 0 }],
      initialValues: points,
      modifiedPoints: points,
      buttonColor: "grey",
      buttonFontColor: "black",
      buttonBorder: "1px solid red",
      contentsDiv: "company_graph_block",
    };

    renderFull(graphicalEffects);
  }

  function returnInfo() {
    if (points && points.length > 0) return null;
    else return <LoadingGeneral />;
  }

  return (
    <div id="company_graph_block" className={styles.graph}>
      {returnInfo()}
    </div>
  );
};
