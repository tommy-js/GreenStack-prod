import React from "react";
import { WatchlistAnalysis } from "../WatchlistAnalysis/WatchlistAnalysis";
import { Pie } from "react-chartjs-2";

interface Props {
  watchlist: any;
}

export const WatchlistStats: React.FC<Props> = (props) => {
  const info = props.watchlist.map((el: any) => el.value);
  const infoTitles = props.watchlist.map((el: any) => el.title);
  const colors = [
    "#ff4646",
    "#fc8621",
    "#ffefa0",
    "#30475e",
    "#821752",
    "#511845",
    "#ffd31d",
    "#7fa998",
    "#ad1d45",
    "#a773c3",
    "#355c7d",
    "#c06c84",
    "#ff7844",
    "#5b252d",
    "#ffd460",
    "#c83b3b",
    "#ff7844",
  ];

  const pieData = {
    labels: infoTitles,
    datasets: [
      {
        label: "",
        data: info,
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Pie
        data={pieData}
        options={{
          title: {
            display: true,
            text: "Watchlist by Industry",
            fontSize: 20,
          },
          legend: { display: false },
          cutoutPercentage: 25,
        }}
      />
      <WatchlistAnalysis />
    </div>
  );
};
