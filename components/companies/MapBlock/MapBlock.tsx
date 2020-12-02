import React from "react";
import companyProfiles from "../companyProfiles";
import Link from "next/link";
import { SuggestedCompany } from "../SuggestedCompany/SuggestedCompany";
import styles from "./styles.module.scss";

export const MapBlock: React.FC = () => {
  return (
    <div className={styles.map_block}>
      {companyProfiles.map((el) => (
        <React.Fragment>
          <Link href={`/${el.ticker}`}>
            <a>{el.title}</a>
          </Link>
          <SuggestedCompany key={el.title} text={el.title} />
        </React.Fragment>
      ))}
    </div>
  );
};
