import React from "react";
import "./styles.module.scss";

interface Props {
  ticker: string;
  title: string;
  img: string;
}

export const TickerContainer: React.FC<Props> = (props) => {
  return (
    <div className="ticker_container">
      <p className="ticker_id">
        {props.title} #{props.ticker}
      </p>
      <div className="small_image_container">
        <img className="initial_login_image small_color_img" src={props.img} />
      </div>
    </div>
  );
};
