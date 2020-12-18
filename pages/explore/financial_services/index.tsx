import React, { useEffect, useState } from "react";
import { FinancialServicesPage } from "../../../components/companies/industries/FinancialServicesPage/FinancialServicesPage";
import UserLoginAuthSubresolver from "../../../components/resolvers/UserLoginAuthSubresolver";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../components/actions/actions";

interface Redux {
  status: boolean;
}

const FinancialServices: React.FC<Redux> = (props) => {
  const [loadingInUser, setLoadingInUser] = useState(true);

  useEffect(() => {
    if (props.status === false) setLoadingInUser(true);
    else setLoadingInUser(false);
  }, [props.status]);

  function checkReturn() {
    if (loadingInUser === true) {
      return (
        <UserLoginAuthSubresolver loggedIn={() => setLoadingInUser(false)} />
      );
    } else return <FinancialServicesPage />;
  }

  return checkReturn();
};

export default connect(mapStateToProps)(FinancialServices);
