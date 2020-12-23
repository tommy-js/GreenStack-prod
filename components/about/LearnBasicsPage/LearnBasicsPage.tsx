import React, { useState, useEffect, useContext } from "react";
import { NavBar } from "../../navigation/NavBar/NavBar";
import { CommentSection } from "../CommentSection/CommentSection";
import { Footer } from "../Footer/Footer";
import { MultipleChoice } from "../MultipleChoice/MultipleChoice";
import { Blanks } from "../Blanks/Blanks";
import { LearnGraphs } from "../LearnGraphs/LearnGraphs.jsx";
import { TutorialScore } from "../TutorialScore/TutorialScore";
import Router from "next/router";
import {
  APPLE2MonthEffects,
  AMZN10YearEffects,
  HTZGQ5YearEffects,
} from "../graphData.js";
import Link from "next/link";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { useQuery } from "react-apollo";
import { tutorialQuery } from "../../queries/queries";
import { Pie } from "react-chartjs-2";
import styles from "./styles.module.scss";

interface Redux {
  status: boolean;
  progress: any;
  progressElements: any;
}

const LearnBasicsPageRender: React.FC<Redux> = (props) => {
  const { data } = useQuery(tutorialQuery, {
    variables: { id: 1 },
    pollInterval: 500,
  });
  const [comments, setComments] = useState([] as any);
  const [id] = useState(props.progress[0].id);
  const [currentProgress] = useState(props.progress[0].percent);

  useEffect(() => {
    if (data && data.tutorial) setComments(data.tutorial.comments);
  }, [data]);

  const pieData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options1 = {
    title: "Checkpoint 1",
    options: [
      {
        text:
          "Answer true or false: it is better to invest in few stocks rather than many.",
        correctAnswer: "false",
        value: 2,
        id: 0,
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
        <h2 className={styles.learn_page_header}>Getting Started</h2>

        <p className={styles.learn_page_paragraph}>
          Getting involved in the stock market can be intimidating. From the
          outside it seems very complicated; not only do you need to have the
          money to invest, but you need to know how to get started with a stock
          broker, buy and sell shares, and how to manage your risk. Fortunately,
          it doesn't have to be so difficult. In this short tutorial we'll break
          down the basics of the stock market into terms that are easy to
          understand.
        </p>
        <Pie
          data={pieData}
          options={{
            title: { display: true, text: "Avg Rainfall", fontSize: 20 },
            legend: { display: true, position: "left" },
            cutoutPercentage: 25,
          }}
        />
        <p className={styles.learn_page_paragraph}>
          At its most basic, the stock market is composed of companies and their
          investors(that's you!). Investors purchase portions of companies,
          called{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              shares
            </a>
          </Link>
          , which fluctuate in value depending on how a company is doing.
          Companies sell these shares in order to raise money to pursue
          research, develop and manufacture products, pay their employees, and
          more. It's your hope as an investor that the value of these shares
          increase over time, so that you can sell them for a profit somewhere
          down the line.
        </p>
        <p className={styles.learn_page_paragraph}>
          Let's take a look at some historical Apple stock data to see how this
          might work.
        </p>

        <LearnGraphs
          graphicalEffects={APPLE2MonthEffects.graphicalEffects}
          contentsDiv="apple_learning_graph"
        />

        <p className={styles.learn_page_paragraph}>
          The graph above is Apple stock-price data from March 1, 2019 to May
          30, 2019. You can see that if you had purchased a share at the
          beginning of this timeframe, by the end of May the value of your share
          would have increased from $43.74 to $50.17. Selling this share would
          have made you $6.43!
        </p>

        <h3 className={styles.learn_page_notif}>
          Complete the knowledge check to save your progress!
        </h3>

        <MultipleChoice
          options={[
            { title: "A portion of your portfolio", id: 0 },
            { title: "A small piece of a company", id: 1 },
            { title: "Something to brag about!", id: 2 },
          ]}
          id={id}
          specId="Basics01"
          increment={5}
          correctAnswer={1}
          currentProgress={currentProgress}
          headline="What is a share?"
        />

        <p className={styles.learn_page_paragraph}>
          Of course, $6.43 isn't much money. However, this brings us to one of
          the most common and successful investment strategies.
        </p>
        <p className={styles.learn_page_subheader}>Buy, Hold, Buy More</p>
        <p className={styles.learn_page_paragraph}>
          The goal of most investors is to make small gains slowly over time,
          and to therefore increase the value of their investment significantly
          over a period of years. For example, $1,000 invested into Amazon
          stock, AMZN, in June of 2010 would have been worth $26.771.43 in
          October of 2020.
        </p>
        <LearnGraphs
          graphicalEffects={AMZN10YearEffects.graphicalEffects}
          contentsDiv="amazon_10_year"
        />
        <p className={styles.learn_page_paragraph}>
          That being said, Amazon is an extreme example of this kind of growth.
          Invested into another popular company, Walmart, that $1,000 would be
          worth roughly $2,769 after those ten years.
        </p>
        <p className={styles.learn_page_paragraph}>
          Not everyone has $1,000, $10,000, or $100,000 lying around, though. A
          substantial portion of investors are{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              retail investors
            </a>
          </Link>
          , which are normal individuals rather than institutions. This brings
          up an important saying: "time in the market beats timing the market."
          Instead of trying to pick the perfect stock and get it at the perfect
          time, small consistent investments into the market as a whole will
          almost always yield better results.
        </p>
        <p className={styles.learn_page_paragraph}>
          For example, let's take the years 2010-2020 and say we invest $100 per
          year into the NASDAQ, a stock market{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              index
            </a>
          </Link>
          . Over this timeframe our total investment of $1000 would have grown
          to about $2,468. While these aren't Amazon numbers, there is
          significantly less risk involved through investing in an index than
          there is when putting all your money into one company.
        </p>
        <p className={styles.learn_page_subheader}>Growth not guaranteed</p>
        <LearnGraphs
          graphicalEffects={HTZGQ5YearEffects.graphicalEffects}
          contentsDiv="hertz_10_year"
        />
        <p className={styles.learn_page_paragraph}>
          It's tempting to think that because certain companies have seen
          massive growth and success over a few short years, this means every
          company will see success. Unfortunately, this couldn't be further from
          the truth.
        </p>
        <p className={styles.learn_page_paragraph}>
          Some companies, such as Gamestop and Hertz, have been on the downtrend
          for years. $1,000 invested into Gamestop in 2015 would be worth about
          $283 in 2020.
        </p>
        <p className={styles.learn_page_paragraph}>
          This brings up a major concept in investing;{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              risk
            </a>
          </Link>
          . Risk is the likelihood that you will lose money on an investment.
          You can reduce risk in certain ways. One of these ways is to diversify
          your stocks.{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              Diversification
            </a>
          </Link>{" "}
          is the process of spreading your money out among many companies and
          industries, instead of just a few. The greater the number of stocks
          you own, and the greater the number of{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              industries
            </a>
          </Link>{" "}
          they span, the less risk you take on. This means that if one of the
          companies you own shares in loses value or goes bankrupt, your
          portfolio will take less of a hit.
        </p>

        <Blanks
          id={id}
          specId="Basics02"
          title={options1.title}
          options={options1.options}
        />
        <p className={styles.learn_page_paragraph}>
          There is good reason to invest in many different industries. In just
          this past year we could see a very good example of why this is the
          case. The pandemic has caused some very dramatic shifts in industries.
          Airline stocks, for instance, have been heavily impacted by the
          shut-downs, and have suffered as a result. Tech stocks, such as
          Twitter and Netflix, however, have never done better.
        </p>
        <p className={styles.learn_page_paragraph}>
          This isn't to say that predicting the pandemic and therefore investing
          heavily in tech was the only way to remain solvent, of course. Well
          diversified portfolios were no doubt able to withstand the pandemic,
          as their losses were offset by their gains.
        </p>
        <p className={styles.learn_page_paragraph}>
          Like most things concerning stocks, things aren't so simple. You
          really need to identify your priorities when you first get started.
          Increasing your diversification reduces your risk and the inherent{" "}
          <Link href="/about/glossary">
            <a className={`${styles.emphasize} ${styles.featureless_link}`}>
              volatility
            </a>
          </Link>{" "}
          you take on from the stock market. In this case, to be volatile is to
          be subject to large jumps and drops in value. This is great for those
          looking to slowly gain over a period of years or decades, but not
          always so good for those looking to make a lot quicker.
        </p>

        <TutorialScore />

        <CommentSection id="1" comments={comments} />
      </div>
      <Footer />
    </div>
  );
};

export const LearnBasicsPage = connect(mapStateToProps)(LearnBasicsPageRender);
