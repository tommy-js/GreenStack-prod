import React, { useState, useEffect, useRef, createRef } from "react";
import { LoadingGeneral } from "../../login/Loading/Loading.tsx";
import { renderFull } from "stock-graphics";
import { useQuery } from "react-apollo";
import { requestDataSetQuery } from "../../queries/queries.js";
import styles from "./styles.module.scss";
const error = require("../../../public/error.png");

export const CompanyGraph = ({ title, ticker }) => {
  let arr = [];
  let tickers = arr.push(ticker);
  const reference = createRef();
  const [loaded, setLoaded] = useState(false);
  const [renderErr, setRenderErr] = useState(false);
  const [points, setPoints] = useState([]);
  const { data, loading } = useQuery(requestDataSetQuery, {
    variables: { tickers: arr },
  });

  useEffect(() => {
    if (data) {
      let info = data.requestData[0];
      if (info.elements.length > 0) {
        let els = info.elements;
        for (let i = 0; i < els.length; i++) {
          let integerVal = parseFloat(els[i].y);
          let pointVal = {
            x: els[i].x,
            y: integerVal,
          };
          els[i] = pointVal;
        }
        setPoints(els);
        setLoaded(true);
      } else if (info.elements.length === 0) {
        setRenderErr(true);
      }
    }
  }, [data]);

  useEffect(() => {
    if (loaded === true) {
      renderEl();
    }
  }, [loaded]);

  function returnError() {
    if (renderErr === true) {
      return (
        <div className={styles.error_image_block}>
          <img src={error} className={styles.error_image} />
          <p className={styles.error_text}>We couldn't load this graph :(</p>
        </div>
      );
    } else return null;
  }

  function renderEl() {
    const graphicalEffects = {
      graphHeight: "100%",
      graphWidth: "100%",
      graphLeft: 0,
      graphRight: 0,
      positioning: "0",
      title: "Apple",
      ticker: "AAPL",
      fontSize: 14,
      fontFamily: "Roboto, sans-serif",
      backgroundColor: "white",
      lineWidth: 5,
      boundaryWidth: 3,
      gainColor: "#57a773",
      lossColor: "#990011ff",
      fillColor: "red",
      dateRangeActive: false,
      graphFontSize: 12,
      infoDivWidth: 100,
      buttonSize: { width: 50, height: 30 },
      buttonFontSize: 12,
      buttonFontColor: "#fcf6f5ff",
      buttonColor: "#57a773",
      buttonBorder: "1px solid red",
      contentsDiv: "company_graph_block",
      decluttering: 15,
      indexed: [0, 0],
      indexedArray: [{ a: 0, b: 0 }],
      initialValues: points,
      modifiedPoints: points,
      x_hash: "db8197d9-0f9f-4dd1-8f28-f7d3e31a035f",
    };

    renderFull(graphicalEffects);
  }

  function returnInfo() {
    if (loaded === false) return null;
    else return <LoadingGeneral />;
  }

  return (
    <div id="company_graph_block" className={styles.graph}>
      {returnInfo()}
      {returnError()}
    </div>
  );
};
