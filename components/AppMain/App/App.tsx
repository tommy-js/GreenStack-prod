import React, { createContext, useState } from "react";
import ApolloClient from "apollo-boost";
import { Page404 } from "../Page404/Page404";
import { ApolloProvider } from "react-apollo";
import { Login } from "../../login/Login/Login";
import { MainRender } from "../MainRender/MainRender";
import { AppInformation } from "../../AppInformation/AppInformation/AppInformation";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

export const statusContext = createContext<any>(false);

export function App() {
  const [status, setStatus] = useState(false);

  return (
    <div className="App">
      <statusContext.Provider value={{ status, setStatus }}>
        <ApolloProvider client={client}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/information" component={AppInformation} />
            <MainRender />
            <Route path="/404" component={Page404} />
            <Redirect to="/404" />
          </Switch>
        </ApolloProvider>
      </statusContext.Provider>
    </div>
  );
}
