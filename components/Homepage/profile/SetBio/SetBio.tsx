import React, { useState, useEffect } from "react";
const save = require("../../../../public/save.png");
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { setBioMutation } from "../../../queries/queries";
import styles from "./styles.module.scss";

interface Props {
  bio: string;
  setBioMutation: (variables: object) => any;
}

const SetBioMutation: React.FC<Props> = (props) => {
  const [opac, setOpac] = useState(0);
  const [initialBio] = useState(props.bio);

  useEffect(() => {
    if (props.bio === initialBio) setOpac(0);
    else setOpac(1);
  }, [props.bio]);

  function modBio() {
    if (props.bio.length <= 120) {
      props
        .setBioMutation({
          variables: {
            token: sessionStorage.getItem("Token"),
            bio: props.bio,
          },
        })
        .catch((err: any) => {
          console.log(err);
        })
        .then((res: any) => {
          console.log(res);
        });
    }
  }

  return (
    <img
      style={{ opacity: opac }}
      className={styles.bio_image}
      onClick={() => modBio()}
      src={save}
    />
  );
};

export const SetBio = compose(
  graphql(setBioMutation, { name: "setBioMutation" })
)(SetBioMutation);
