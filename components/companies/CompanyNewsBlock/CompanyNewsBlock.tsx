import React, { useState, useEffect } from "react";
import { NewsComponent } from "../NewsComponent/NewsComponent";
import { Header } from "../../User/Header/Header";
import { useQuery } from "react-apollo";
import { returnNewsQuery } from "../../queries/queries";
import styles from "./styles.module.scss";

export const CompanyNewsBlock = (props: any) => {
  const [loggedNews, setLoggedNews] = useState([] as any);
  const [shortLoggedNews, setShortLoggedNews] = useState([] as any);
  const [maxLength, setMaxLength] = useState(0);
  const { data } = useQuery(returnNewsQuery, {
    variables: { title: props.title },
  });

  useEffect(() => {
    if (data) {
      if (data.returnNews.articles) {
        setLoggedNews(data.returnNews.articles);
        setMaxLength(data.returnNews.articles.length);
        let shortenedArray = data.returnNews.articles.slice(0, 3);
        setShortLoggedNews(shortenedArray);
      } else {
        setLoggedNews([]);
        setShortLoggedNews([]);
      }
    }
  }, [data]);

  function loadMore() {
    if (shortLoggedNews.length - 5 <= maxLength) {
      let arr = loggedNews.slice(0, shortLoggedNews.length + 5);
      setShortLoggedNews(arr);
    }
  }

  function passData() {
    if (shortLoggedNews) {
      return (
        <React.Fragment>
          {shortLoggedNews.map((el: any) => (
            <NewsComponent
              title={el.title}
              author={el.author}
              description={el.description}
              url={el.url}
              key={el.url}
            />
          ))}
          <button className={styles.center_button} onClick={() => loadMore()}>
            Load more
          </button>
        </React.Fragment>
      );
    } else return null;
  }

  return (
    <div className={styles.news_component}>
      <Header text="Today's News" />
      {passData()}
    </div>
  );
};
