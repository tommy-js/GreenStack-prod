import React, { useState, useEffect } from "react";
import { NavBar } from "../../navigation/NavBar/NavBar";
import { CommentSection } from "../CommentSection/CommentSection";
import { LearnGraphs } from "../LearnGraphs/LearnGraphs.jsx";
import {
  SP500HalfDecadeEffects,
  MCD2020Effects,
  AMD2020Effects,
} from "../graphData.js";
import { TutorialScore } from "../TutorialScore/TutorialScore";
import Link from "next/link";
import { useQuery } from "react-apollo";
import { tutorialQuery } from "../../queries/queries";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import styles from "./styles.module.scss";

interface Redux {
  tutorialScores: any;
}

const LearnProtectionPageRedux: React.FC<Redux> = (props) => {
  const { data } = useQuery(tutorialQuery, {
    variables: { id: 4 },
    pollInterval: 500,
  });
  const [comments, setComments] = useState([] as any);
  const [score, setScore] = useState(0);
  useEffect(() => {
    if (data && data.tutorial) {
      setComments(data.tutorial.comments);
      setScore(data.tutorial.score);
    }
  }, [data]);
  return (
    <div>
      <NavBar />
      <div className={styles.learn_page}>
        <h2 className={styles.learn_page_header}>Diversification</h2>

        <div className={styles.sub_info}>
          <p className={styles.learn_page_paragraph}>
            Become familiar with the concept of diversification. Learn to use
            this to help you minimize risk and maximize profits.
          </p>
          <p className={styles.score}>{score}/5</p>
          <p className={styles.published}>
            Published 1/1/21 by{" "}
            <span className={styles.sub_info_flair}>GreenStack</span>
          </p>
        </div>

        <p className={styles.learn_page_paragraph}>
          The stock market can be a volatile place, and many traders have lost
          fortunes by investing too heavily in one stock or sector. In this
          tutorial we'll give you some pointers for how to continue growing your
          portfolio amidst uncertain times.
        </p>
        <p className={styles.learn_page_paragraph}>
          It can be tempting when looking at the growth of stocks such as
          Amazon, Tesla, or Apple to just put everything into these or similar
          tech companies. Of course, this idea is flawed in that there is always
          the possibility that a company like Amazon or Apple loses stock value,
          or are outpaced by the general market.
        </p>
        <p className={styles.learn_page_paragraph}>
          There are two main ways investors protect their assets, and both rely
          on the same general idea. The first is through manual{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              diversification
            </a>
          </Link>
          . This is the process of splitting up your portfolio amongst many
          stocks, and ideally many different sectors. For example, you might buy
          AMD stock, which is in the tech sector, as well as McDonalds stock,
          which is a member of the service industry.
        </p>

        <LearnGraphs
          graphicalEffects={MCD2020Effects.graphicalEffects}
          contentsDiv="mcdonalds_2020_year"
        />
        <LearnGraphs
          graphicalEffects={AMD2020Effects.graphicalEffects}
          contentsDiv="amd_2020_year"
        />

        <p className={styles.learn_page_paragraph}>
          With a situation like the Coronavirus pandemic of 2020, your stocks
          would be generally well protected here. Even though you own a stock in
          the service industry, which was heavily affected, you also own one in
          the tech sector. Technology has generally done very well through the
          pandemic, and so at the very least you should be shielded from a great
          deal of volatility.
        </p>
        <p className={styles.learn_page_paragraph}>
          The second way to protect yourself from market volatility is to invest
          in an{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              index fund
            </a>
          </Link>
          . An index fund mirrors an{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              index
            </a>
          </Link>
          , which is a grouping of stocks designed to reflect the overall
          economy.
        </p>

        <LearnGraphs
          graphicalEffects={SP500HalfDecadeEffects.graphicalEffects}
          contentsDiv="sp_5_year"
        />

        <p className={styles.learn_page_paragraph}>
          The graph above shows the value of the S&P 500 from 2011 to 2020. The
          S&P 500 is a very popular and well-known index. In the case of the S&P
          500, it is an index that measures the value of the 500 largest
          companies listed on US stock exchanges.
        </p>
        <p className={styles.learn_page_paragraph}>
          While you can't buy shares of the S&P 500, you can buy shares of index
          funds that hold similar or even identical stocks. If you're looking
          for minimal work and good results long-term, this is probably the way
          to go.
        </p>
        <p className={styles.learn_page_paragraph}>
          Even assuming a situation such as the pandemic never occurs again, the
          motivation for diversifying is simple; over time, the economy as a
          whole tends to grow. Individual companies may die off, but if you're
          looking for consistent, long-term growth, buying into the larger
          economy as a whole is your best bet.
        </p>
        <p className={styles.learn_page_paragraph}>
          You can get a sense of how the overall economy is doing from these
          kinds of graphs. Just from looking at the one above you can tell that
          the economic state of the US has improved drastically in only a few
          years.
        </p>
        <TutorialScore id="3" scores={props.tutorialScores[2]} />
        <CommentSection id="4" comments={comments} />
      </div>
    </div>
  );
};

export const LearnProtectionPage = connect(mapStateToProps)(
  LearnProtectionPageRedux
);
