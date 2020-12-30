import React, { useState } from "react";
import { PostPortfolioValue } from "../PostPortfolioValue/PostPortfolioValue";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
const confetti = require("../../../public/confetti.png");
import styles from "./styles.module.scss";

interface Redux {
  money: number;
}

interface Props extends Redux {
  setPostingToFeed: () => void;
}

const PortfolioValuePostModalContentRender: React.FC<Props> = (props) => {
  const [text, setText] = useState("");

  function successfulEvent() {
    setText("");
    props.setPostingToFeed();
  }

  return (
    <div>
      <div className={styles.text}>
        <div className={styles.img_container}>
          <img className={styles.img} src={confetti} />
        </div>
        <span className={styles.span}>
          Announce your portfolio value of ${props.money}
        </span>
        <div className={styles.img_container}>
          <img className={styles.img} src={confetti} />
        </div>
      </div>
      <div className={styles.textarea_block}>
        <textarea
          className={styles.textarea}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <PostPortfolioValue
        money={props.money}
        text={text}
        accompaniedURL=""
        buttonTitle="Submit"
        allowComments={true}
        allowLikes={true}
        image=""
        successfulEvent={successfulEvent}
      />
    </div>
  );
};

export const PortfolioValuePostModalContent = connect(mapStateToProps)(
  PortfolioValuePostModalContentRender
);
