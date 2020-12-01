import React, { useEffect } from "react";
import { Homepage } from "../components/Homepage/Homepage/Homepage";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../components/actions/actions";

interface Redux {
  onStatusSet: (status: boolean) => void;
}

const MainPage: React.FC<Redux> = (props) => {
  useEffect(() => {
    props.onStatusSet(false);
  }, []);

  return (
    <div className="App">
      <Homepage />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
