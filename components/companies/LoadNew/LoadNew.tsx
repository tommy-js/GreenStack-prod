import React from "react";

interface Props {
  loadMore: () => void;
}

export const LoadNew: React.FC<Props> = (props) => {
  return <button onClick={() => props.loadMore()}>Load New</button>;
};
