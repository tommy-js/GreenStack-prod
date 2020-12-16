import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../components/actions/actions";
import { Radar } from "react-chartjs-2";

interface Redux {
  stocks: any;
}

const IndustryInvolvementChartRedux: React.FC<Redux> = (props) => {
  const [industries, setIndustries] = useState({
    RawMaterials: 0,
    Agriculture: 0,
    Manufacturing: 0,
    Utilities: 0,
    Construction: 0,
    Technology: 0,
    Retail: 0,
    Medicine: 0,
    FinancialServices: 0,
    Communication: 0,
    Transportation: 0,
    Hospitality: 0,
    Advertizing: 0,
    Media: 0,
    FoodProduction: 0,
    FoodServices: 0,
    RealEstate: 0,
  });

  const data = {
    labels: [
      "Raw Materials",
      "Agriculture",
      "Manufacturing",
      "Utilities",
      "Advertizing",
      "Construction",
      "Retail",
      "Transportation",
      "Technology",
      "Financial Services",
      "Communication",
      "Medicine",
      "Hospitality",
      "Media",
      "Food Services",
      "Food Production",
      "Real Estate",
    ],
    datasets: [
      {
        data: [
          industries.RawMaterials,
          industries.Agriculture,
          industries.Manufacturing,
          industries.Utilities,
          industries.Transportation,
          industries.Construction,
          industries.Retail,
          industries.FinancialServices,
          industries.Communication,
          industries.Hospitality,
          industries.Media,
          industries.Medicine,
          industries.Advertizing,
          industries.FoodProduction,
          industries.Technology,
          industries.RealEstate,
          industries.FoodServices,
        ],
        borderColor: "green",
      },
    ],
  };

  const options = {
    scale: {
      angleLines: {
        display: true,
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 100,
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export const IndustryInvolvementChart = connect(mapStateToProps)(
  IndustryInvolvementChartRedux
);
