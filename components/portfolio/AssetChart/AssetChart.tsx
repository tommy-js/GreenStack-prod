import React from "react";
import { Pie } from "react-chartjs-2";
import { mapStateToProps } from "../../actions/actions";
import { connect } from "react-redux";

type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  color: string;
  ticker: string;
};

interface Redux {
  stocks: StockItem[];
  industries: any;
}

const AssetChartRender: React.FC<Redux> = (props) => {
  const info = props.industries.map((el: any) => el.value);
  const infoTitles = props.industries.map((el: any) => el.title);
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
    <React.Fragment>
      <Pie
        data={pieData}
        options={{
          title: {
            display: true,
            text: "Your Industry Breakdown",
            fontSize: 20,
          },
          legend: { display: false },
          cutoutPercentage: 25,
        }}
      />
    </React.Fragment>
  );
};

export const AssetChart = connect(mapStateToProps)(AssetChartRender);
