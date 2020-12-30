import React from "react";
import { BackButton } from "../BackButton/BackButton";
import { SaveButton } from "../SaveButton/SaveButton";

interface Props {
  postId: string;
  title: string;
  text: string;
}

export const Buttons: React.FC<Props> = (props) => {
  return (
    <div>
      <BackButton postId={props.postId} />
      <SaveButton title={props.title} text={props.text} postId={props.postId} />
    </div>
  );
};
