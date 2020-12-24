import React, { useState, useEffect, useContext } from "react";
import { NavBar } from "../../navigation/NavBar/NavBar";
import { CommentSection } from "../CommentSection/CommentSection";
import { MultipleChoice } from "../MultipleChoice/MultipleChoice";
import { Blanks } from "../Blanks/Blanks";
import { SelectAll } from "../SelectAll/SelectAll";
import { LearnGraphs } from "../LearnGraphs/LearnGraphs.jsx";
import { TutorialScore } from "../TutorialScore/TutorialScore";
import Router from "next/router";
import {
  APPLEOptionsEffects,
  GMEOptionsEffects,
  GMEOptionsNegativeEffects,
} from "../graphData.js";
import Link from "next/link";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { useQuery } from "react-apollo";
import { tutorialQuery } from "../../queries/queries";
import styles from "./styles.module.scss";

interface Redux {
  status: boolean;
  progress: any;
  progressElements: any;
  tutorialScores: any;
}

export const LearnOptionsPageRender: React.FC<Redux> = (props) => {
  const { data } = useQuery(tutorialQuery, {
    variables: { id: 2 },
    pollInterval: 500,
  });
  const [comments, setComments] = useState([] as any);
  const [score, setScore] = useState(0);
  const [id, setId] = useState(props.progress[1].id);
  const [currentProgress, setCurrentProgress] = useState(
    props.progress[0].percent
  );

  useEffect(() => {
    if (data && data.tutorial) {
      setComments(data.tutorial.comments);
      setScore(data.tutorial.score);
    }
  }, [data]);

  const options1 = {
    title: "Vocab Test",
    options: [
      {
        text: "An options contract you don't own the assets to",
        correctAnswer: "naked",
        value: 2,
        id: 0,
      },
      {
        text: "An options contract you do own shares for",
        correctAnswer: "covered",
        value: 9,
        id: 1,
      },
    ],
  };

  const optionsSelectAll = {
    title: "The premium will be lost in which event(s)?",
    options: [
      {
        id: 0,
        title: "The stock price falls",
        selected: false,
        correct: false,
      },
      {
        id: 1,
        title: "Your puts expire above the strike price",
        selected: false,
        correct: true,
      },
      {
        id: 2,
        title: "You sell shares in the company",
        selected: false,
        correct: false,
      },
      {
        id: 3,
        title: "Your calls expire below the strike price",
        selected: false,
        correct: true,
      },
    ],
  };

  useEffect(() => {
    if (props.status === false) Router.push("/login");
  }, []);

  return (
    <div>
      <NavBar />
      <div className={styles.learn_page}>
        <h2 className={styles.learn_page_header}>The Basics of Options</h2>

        <div className={styles.sub_info}>
          <p className={styles.learn_page_paragraph}>
            Learn how to invest in stock options.
          </p>
          <p className={styles.score}>{score}/5</p>
          <p className={styles.published}>
            Published 1/1/21 by{" "}
            <span className={styles.sub_info_flair}>GreenStack</span>
          </p>
        </div>

        <p className={styles.learn_page_subheader}>An Intro to Options</p>
        <p className={styles.learn_page_paragraph}>
          Most people interested the stock market have heard of buying shares
          and know what it means to invest in a company. However, there is a lot
          more out there than simply buying and holding shares.
        </p>
        <p className={styles.learn_page_paragraph}>
          An example of varied investment strategy appears in the concept of an{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              option
            </a>
          </Link>
          . This is a contract with another trader that gives you the right to
          buy or sell a number of shares at a certain price. In fact, it
          specifically gives you the right to buy or sell 100 shares. There are
          two types of options;{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              call
            </a>
          </Link>
          , which basically means you think the stock price will rise, and{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              puts
            </a>
          </Link>
          , which implies that you believe the stock value will fall.
        </p>
        <p className={styles.learn_page_paragraph}>
          These terms sound complicated, but we'll explain them simply here,
          starting with the call option.
        </p>
        <p className={styles.learn_page_subheader}>The Call Option</p>
        <p className={styles.learn_page_paragraph}>
          Whenever you buy a call option, you're basically betting that the
          stock price will rise. In order to place a call option, you need to
          pick a price you think the stock will rise to and a date you think it
          will hit that level by. For instance, if I were certain that Tesla
          stock would hit $600 by January 10, 2021, I would buy this option
          contract and in return I would pay a fee. The fee is called a{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              premium
            </a>
          </Link>
          , and it can range from as little as $1 to tens of thousands or more.
          Plainly put, the fee is the cost for you to buy this option.
        </p>
        <p className={styles.learn_page_paragraph}>
          Of course, you can also sell calls. This allows you to charge other
          investors a premium, which lets you make money easily. There is,
          however, greater risk in selling options, which we'll get into soon.
        </p>
        <p className={styles.learn_page_paragraph}>
          There are two important concepts when it comes to selling calls, which
          are that of{" "}
          <Link href="/about/glossary">
            <span className={`${styles.emphasize} ${styles.featureless_link}`}>
              naked calls
            </span>
          </Link>{" "}
          and{" "}
          <Link href="/about/glossary">
            <span className={`${styles.emphasize} ${styles.featureless_link}`}>
              covered calls
            </span>
          </Link>
          . The covered call takes place when you own the asset you're selling
          the call option for. This means that if you lose your bet, and the
          person on the other end of your contract excercizes, you're "covered".
          There is limited risk associated with this.
        </p>

        <MultipleChoice
          options={[
            { title: "A more valuable share or asset", id: 0 },
            { title: "The right to purchase shares before others", id: 1 },
            { title: "The fee you pay to buy an options contract", id: 2 },
          ]}
          id={id}
          specId="Options01"
          increment={5}
          correctAnswer={3}
          currentProgress={currentProgress}
          headline="What is a premium?"
        />

        <p className={styles.learn_page_paragraph}>
          In comparison, the naked call is far riskier; it essentially means you
          do not own the underlying asset, and so your potential loss is
          technically unlimited.
        </p>
        <p className={styles.learn_page_subheader}>The Put Option</p>
        <p className={styles.learn_page_paragraph}>
          Puts are the exact opposite of calls. You believe the stock price will
          fall and so you sell or buy a put option in the hopes of making money.
          Selling a put option gives you the premium when someone buys your
          contract. Buying the put option costs you money upfront but then if
          the stock falls or stays below a certain level you can make large sums
          of money.
        </p>
        <p className={styles.learn_page_paragraph}>
          The same concepts of{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              naked puts
            </a>
          </Link>{" "}
          and{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              covered puts
            </a>
          </Link>{" "}
          applies here.
        </p>
        <p className={styles.learn_page_subheader}>Call Example</p>
        <p className={styles.learn_page_paragraph}>
          The best way to learn is through example, so here we'll really get
          into the nitty-gritty of options trading.
        </p>

        <Blanks
          id={id}
          specId="Option02"
          title={options1.title}
          options={options1.options}
        />

        <p className={styles.learn_page_paragraph}>
          Let's say you think the price of Apple is going to rise. In fact,
          you're confident that the share value of Apple will go above $130 by
          December 25, 2020. This represents a gain of a little over $9 per
          share.
        </p>
        <p className={styles.learn_page_paragraph}>
          Because you're so confident, you decide to buy calls on Apple at this{" "}
          <Link href="/about/glossary">
            <span className={`${styles.emphasize} ${styles.featureless_link}`}>
              strike price
            </span>
          </Link>{" "}
          and for this date. Because it is widely believed that the price of
          Apple will rise over time, and because the price of its shares are
          relatively high, the cost of buying this option contract is also high.
        </p>
        <p className={styles.learn_page_paragraph}>
          Remember that if the date you picked comes and goes and Apple hasn't
          reached that price, your contract will expire worthless and you will
          lose your entire premium.
        </p>
        <LearnGraphs
          graphicalEffects={APPLEOptionsEffects.graphicalEffects}
          contentsDiv="apple_learning_graph"
        />
        <p className={styles.learn_page_paragraph}>
          It was a close call, but you can see that Apple's stock price was
          above $130 by December 22nd. This means your option is{" "}
          <Link href="/about/glossary">
            <span className={`${styles.emphasize} ${styles.featureless_link}`}>
              in the money(ITM)
            </span>
          </Link>
          . This is to say that on paper you have made a profit. We say "on
          paper" because you must also consider any trading fees that may reduce
          the value of the option.
        </p>
        <p className={styles.learn_page_paragraph}>
          Had the stock price been below $130 on December 25th, your options
          would have been{" "}
          <Link href="/about/glossary">
            <span className={`${styles.emphasize} ${styles.featureless_link}`}>
              out of the money(OTM)
            </span>
          </Link>
          , which simply means exercizing or selling the contract would have
          resulted in a net loss.
        </p>
        <p className={styles.learn_page_subheader}>Put Example</p>
        <p className={styles.learn_page_paragraph}>
          Remember that a put is the opposite of a call; while a call option
          states that you expect the stock price to rise, a put shows that
          you're betting it will fall - or at the very least stay below a
          certain level.
        </p>
        <p className={styles.learn_page_paragraph}>
          Let's say we're certain that Gamestop's stock is going to fall below
          $10. In fact, we're so certain that on November 16th, 2018 we buy a
          put option. Our option is in effect for 6 months. This means that if
          GME falls below $10 within that timeframe have two ways to make money;
          we can exercize our option or we can sell our contract. The
          differences between these will be covered in a more advanced tutorial.
        </p>
        <LearnGraphs
          graphicalEffects={GMEOptionsEffects.graphicalEffects}
          contentsDiv="gamestop_learning_graph"
        />
        <p className={styles.learn_page_paragraph}>
          We can see that, luckily for us, the stock price fell. Due to the
          nature of how options work, the further it falls during our contract
          period, the more money we end up making. If we had sold our contracts
          or executed on 4/12/2018, we would have made $10-$9.59=$0.41 per
          share. Since option contracts are always bundled in groupings of 100
          shares, our one option contract would have made us a total of
          $0.41*100=$41! Not bad money, but significantly less in comparison to
          what we would have made if we'd held out until when our contract
          expired. Had we done this, we would have made ($10-$8.73)*100=$127!
        </p>
        <p className={styles.learn_page_subheader_red}>A Word of Caution</p>
        <p className={styles.learn_page_paragraph}>
          Options have the potential to make an investor a substantial amount of
          money in a very short period of time. However, these are generally
          considered to be fairly risky tactics. In order to get involved with
          options, you need to first pay a premium, which can easily be hundreds
          or thousands of dollars. If the bet you place does not pan out, which
          is extremely common, you simply lose that money altogether.
        </p>
        <p className={styles.learn_page_paragraph}>
          As a brief but illustrative example of this, let's again take the case
          of Gamestop. For the sake of our point, we'll say that you spent $50
          on options betting that GME will fall below $2 by October 20th, 2020.
          You saw the general trend and assumed that the company would be nearly
          worthless by this point. Let's say you purchased these options on July
          20th of this same year.
        </p>
        <LearnGraphs
          graphicalEffects={GMEOptionsNegativeEffects.graphicalEffects}
          contentsDiv="gamestop_negative_learning_graph"
        />
        <p className={styles.learn_page_paragraph}>
          Unfortunately, it seems you've made a bad bet. Instead of falling, the
          price surprisingly increased over the period of your contract. As a
          result, you lose the entirety of your premium, and you're now out $50.
          And while $50 isn't a huge amount of money, your premium could easily
          be in the hundreds or thousands.
        </p>
        <SelectAll
          id={id}
          specId="Options03"
          title={optionsSelectAll.title}
          options={optionsSelectAll.options}
          currentProgress={currentProgress}
          increment={5}
        />
        <p className={styles.learn_page_subheader}>Summary</p>
        <p className={styles.learn_page_paragraph}>
          Options are a more advanced tactic for earning money in the stock
          market that required a higher degree of care than normal investing.
          For the majority of investors, it probably isn't worth the risk to get
          involved. However, for those who are less risk averse and interested
          in the possibility of quick growth, they can be a useful tool.
        </p>

        <TutorialScore id="2" scores={props.tutorialScores[1]} />
        <CommentSection id="2" comments={comments} />
      </div>
    </div>
  );
};

export const LearnOptionsPage = connect(mapStateToProps)(
  LearnOptionsPageRender
);
