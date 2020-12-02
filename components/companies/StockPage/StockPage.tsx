import React from "react";
import { CompanyInformationBlock } from "../CompanyInformationBlock/CompanyInformationBlock";
import { CompanyNewsBlock } from "../CompanyNewsBlock/CompanyNewsBlock";
import { CompanyComments } from "../CompanyComments/CompanyComments";
import { CompanyOptions } from "../CompanyOptions/CompanyOptions";
import { CompanyGraph } from "../CompanyGraph/CompanyGraph.jsx";
import { CompanyDescription } from "../CompanyDescription/CompanyDescription";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  ticker: string;
  stockId: string;
  description: string;
  price: number;
}

export const StockPage: React.FC<Props> = (props) => {
  return (
    <div className={styles.stock_page}>
      <CompanyInformationBlock title={props.title} />
      <CompanyGraph title={props.title} ticker={props.ticker} />
      <CompanyDescription title={props.title} description={props.description} />
      <CompanyNewsBlock title={props.title} />
      <CompanyOptions
        stockId={props.stockId}
        title={props.title}
        ticker={props.ticker}
      />
      <CompanyComments
        title={props.title}
        ticker={props.ticker}
        stockId={props.stockId}
      />
    </div>
  );
};
