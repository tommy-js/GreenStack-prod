import React from "react";
import companyProfiles from "../companyProfiles";
import { Link } from "react-router-dom";
import { SuggestedCompany } from "../SuggestedCompany/SuggestedCompany";
import "./styles.module.scss";

export const MapBlock: React.FC = () => {
  return (
    <div className="map_block">
      {companyProfiles.map((el) => (
        <React.Fragment>
          <Link to={`/${el.ticker}`}>
            <a>{el.title}</a>
          </Link>
          <SuggestedCompany key={el.title} text={el.title} />
        </React.Fragment>
      ))}
    </div>
  );
};
