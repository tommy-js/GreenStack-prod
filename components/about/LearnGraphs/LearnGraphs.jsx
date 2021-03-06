import React, { useState, useEffect } from "react";
import { renderFull } from "stock-graphics";

export const LearnGraphs = (props) => {
  useEffect(() => {
    renderFull(props.graphicalEffects);
  }, []);

  return (
    <div
      style={{ width: "100%", height: "375px" }}
      id={props.contentsDiv}
    ></div>
  );
};
