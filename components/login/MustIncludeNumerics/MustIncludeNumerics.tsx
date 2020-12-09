import React from "react";

interface Props {
  username: string;
}

export const MustIncludeNumerics: React.FC<Props> = (props) => {
  function returnValidate() {
    let usernameTest = /[~`!#$%\^&*+=\-\[\]\\@(). ';,/{}|\\":<>\?]/g.test(
      props.username
    );
    if (usernameTest === true)
      return <p>Username may only include letters and numbers</p>;
    else return null;
  }

  return returnValidate();
};
