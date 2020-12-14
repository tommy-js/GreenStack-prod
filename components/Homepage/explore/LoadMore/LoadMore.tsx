import React from "react";

interface Props {
  loadMoreButtonDisplay: string;
  loadMoreStocks: () => void;
}

export const LoadMore: React.FC<Props> = (props) => {
  return (
    <button
      style={{ display: props.loadMoreButtonDisplay }}
      onClick={() => props.loadMoreStocks()}
    >
      Load More
    </button>
  );
};
