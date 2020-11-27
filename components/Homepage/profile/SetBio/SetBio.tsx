import React from "react";
const save = require("../../../images/save.png");
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { setBioMutation } from "../../../queries/queries";
import "./styles.module.scss";

interface Props {
  bio: string;
  modEditing: (isEdit: boolean) => void;
  setBioMutation: (variables: object) => any;
}

const SetBioMutation: React.FC<Props> = (props) => {
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
          props.modEditing(false);
        });
    }
  }

  return <img className="bio_image" onClick={() => modBio()} src={save} />;
};

export const SetBio = compose(
  graphql(setBioMutation, { name: "setBioMutation" })
)(SetBioMutation);
