import React, { useContext, useEffect } from "react";
import { statusContext } from "../App/App";
import Router from "next/router";

export const Page404: React.FC = () => {
  const { status } = useContext(statusContext);

  useEffect(() => {
    if (status === false) Router.push("/login");
  }, []);

  return <h1>Oops! Wrong turn! 404</h1>;
};
