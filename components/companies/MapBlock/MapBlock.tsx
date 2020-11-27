import React from "react";
import companyProfiles from "../companyProfiles";
import { Link } from "react-router-dom";
import { SuggestedCompany } from "../SuggestedCompany/SuggestedCompany";
import "./styles.module.scss";

export const MapBlock: React.FC = () => {
  return (
    <div className="map_block">
      {companyProfiles.map((el) => (
        <Link to={`/${el.ticker}`}>
          <SuggestedCompany key={el.title} text={el.title} />
        </Link>
      ))}
    </div>
  );
};
