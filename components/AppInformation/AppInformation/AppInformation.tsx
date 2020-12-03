import React from "react";
import { SignedOutNavBar } from "../SignedOutNavBar/SignedOutNavBar";
import { Footer } from "../../about/Footer/Footer";
import styles from "./styles.module.scss";

export const AppInformation: React.FC = () => {
  return (
    <React.Fragment>
      <SignedOutNavBar />
      <div className={styles.app_information_page}>
        <h1 className={styles.main_header}>
          About <span className={styles.flair}>GreenStack</span>
        </h1>
        <div className={styles.block}>
          <h2 className={styles.header}>Get Noticed</h2>
          <p className={styles.paragraph}>
            Make good calls, post interesting analysis, or just engage with the
            community to acquire followers.
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.header}>Show Your Support</h2>
          <p className={styles.paragraph}>
            Follow other members of the community for their insights on the
            market, unique perspective, and funny memes. Help others find your
            favorite members by liking and commenting on their posts, or by
            sharing what they have to say.
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.header}>From Small To Large</h2>
          <p className={styles.paragraph}>
            GreenStack is designed to scale with your interests. Only want to
            watch a few stocks and interact with a handful of poeple? Easily
            trim your feed down to just what you'd like. Want a more expansive
            view of the community? Join large groups and get the best of what
            our brilliant members have to offer.
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.header}>A Smart Feed</h2>
          <p className={styles.paragraph}>
            We've built GreenStack to suggest companies and users you might be
            interested in based on your previous follows, shares, and likes.
            This makes our website one of the best for finding new and exciting
            stocks to jump in on, as well as for getting unique insights on the
            market.
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.header}>Learn More, Faster</h2>
          <p className={styles.paragraph}>
            We have poured a huge amount of time into the creation of a series
            of interactive tutorials, which cover everything from the very
            basics of stock trading to "The Greeks". Learn only what you want or
            start from the beginning and work all the way through; don't worry
            about taking a break, we have saved your progress!
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.header}>Do Your Own Analysis</h2>
          <p className={styles.paragraph}>
            The tools we have built make it easy for you to do your own analysis
            on each company and their stock. Keep your newfound knowledge to
            yourself or easily share it with your followers!
          </p>
        </div>

        <h1 className={styles.main_header}>FAQs</h1>
        <div className={styles.block}>
          <p className={styles.header}>Is GreenStack free?</p>
          <p className={styles.paragraph}>
            Greenstack and all of its features are completely free. Subscribe
            for $2.99 per month to get a small digital badge and have your name
            put up on the list of supporters.
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
