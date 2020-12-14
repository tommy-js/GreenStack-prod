import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Props {
  selectedParam: any;
  modifySelectParams: (paramObj: any) => void;
}

export const SearchByCategory: React.FC<Props> = (props) => {
  const [selectedParam, setSelectedParam] = useState(props.selectedParam);

  useEffect(() => {
    setSelectedParam(props.selectedParam);
  }, [props.selectedParam]);

  function modSelected(selected: number, arg: string) {
    if (selected === 1) {
      setSelectedParam({ select1: arg, select2: selectedParam.select2 });
    } else if (selected === 2) {
      setSelectedParam({ select1: selectedParam.select1, select2: arg });
    }
  }

  function submit() {
    props.modifySelectParams(selectedParam);
  }

  return (
    <div className={styles.search_by_category}>
      <h3 className={styles.header}>Search by Category</h3>
      <div className={styles.category}>
        <label className={styles.label}>Sector</label>
        <div className={styles.sector_dropdown}>
          <select
            value={selectedParam.select1}
            onChange={(e) => modSelected(1, e.target.value)}
          >
            <option>Any</option>
            <option>Transportation</option>
            <option>Manufacturing</option>
            <option>Technology</option>
          </select>
        </div>
      </div>
      <div className={styles.category}>
        <label className={styles.label}>Country</label>
        <div className={styles.country_dropdown}>
          <select
            value={selectedParam.select2}
            onChange={(e) => modSelected(2, e.target.value)}
          >
            <option>Any</option>
            <option>United States</option>
            <option>Germany</option>
            <option>Japan</option>
            <option>Brazil</option>
            <option>United Kingdom</option>
            <option>Mexico</option>
            <option>Sweden</option>
            <option>Switzerland</option>
            <option>Canada</option>
            <option>The Netherlands</option>
            <option>France</option>
            <option>China</option>
            <option>Russia</option>
            <option>Ireland</option>
          </select>
        </div>
      </div>
      <button onClick={() => submit()}>Search</button>
    </div>
  );
};
