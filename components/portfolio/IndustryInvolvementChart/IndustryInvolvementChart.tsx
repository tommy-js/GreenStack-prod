import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../../components/actions/actions";
import { Radar } from "react-chartjs-2";

interface Redux {
  stocks: any;
}

export const IndustryInvolvementChart: React.FC<Redux> = (props) => {
  const [industries, setIndustries] = useState({
    RawMaterials: 0,
    Agriculture: 0,
    Manufacturing: 0,
    Utilities: 0,
    Construction: 0,
    Retail: 0,
    FinancialServices: 0,
    Communication: 0,
    Hospitality: 0,
    RealEstate: 0,
    InformationTechnology: 0,
    Education: 0,
    Research: 0,
  });

  const data = {
    labels: [
      "Raw Materials",
      "Agriculture",
      "Manufacturing",
      "Utilities",
      "Construction",
      "Retail",
      "Financial Services",
      "Communication",
      "Hospitality",
      "Real Estate",
      "Information Technology",
      "Education",
      "Research",
    ],
    datasets: [
      {
        data: [
          industries.RawMaterials,
          industries.Agriculture,
          industries.Manufacturing,
          industries.Utilities,
          industries.Construction,
          industries.Retail,
          industries.FinancialServices,
          industries.Communication,
          industries.Hospitality,
          industries.RealEstate,
          industries.InformationTechnology,
          industries.Education,
          industries.Research,
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
