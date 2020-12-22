import React from "react";
import { BackButton } from "../BackButton/BackButton";
import { SaveButton } from "../SaveButton/SaveButton";

interface Props {
  postId: string;
}

export const Buttons: React.FC<Props> = (props) => {
  return (
    <div>
      <BackButton postId={props.postId} />
      <SaveButton />
    </div>
  );
};
