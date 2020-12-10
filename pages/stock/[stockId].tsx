import React, { useState, useEffect } from "react";
import UserLoginAuthSubresolver from "../../components/resolvers/UserLoginAuthSubresolver";
import { useLazyQuery } from "react-apollo";
import { stockQuery } from "../../components/queries/queries";
import { useRouter } from "next/router";
import { Stock } from "../../components/companies/Stock/Stock";

const StockPage: React.FC = () => {
  const router = useRouter();
  const [callQuery, { data }] = useLazyQuery(stockQuery);
  const [showRender, setShowRender] = useState(false);
  const [loadingInUser, setLoadingInUser] = useState(true);

  useEffect(() => {
    if (router.query.stockId) {
      console.log(router.query.stockId);
      callQuery({ variables: { stockId: router.query.stockId } });
    }
  }, [router.query.stockId]);

  useEffect(() => {
    if (data) {
      console.log(data);
      setShowRender(true);
    }
  }, [data]);

  function renderPost() {
    if (showRender === true && data) {
      return (
        <Stock
          title={data.stock.title}
          ticker={data.stock.ticker}
          description={data.stock.description}
          country={data.stock.country}
          stockId={data.stock.stockId}
          comments={data.stock.comments}
        />
      );
    } else return null;
  }

  function checkReturn() {
    if (loadingInUser === true) {
      return (
        <UserLoginAuthSubresolver loggedIn={() => setLoadingInUser(false)} />
      );
    } else return renderPost();
  }

  return checkReturn();
};

export default StockPage;
