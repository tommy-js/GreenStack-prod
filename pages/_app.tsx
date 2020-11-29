import React, { createContext, useState } from "react";
import MainPage from "./main";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../components/reducers/reducers";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

export const statusContext = createContext<any>(false);
const store = createStore(reducer);

function MyApp({ Component, pageProps }) {
  const [status, setStatus] = useState(false);
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <statusContext.Provider value={{ status, setStatus }}>
          <Provider store={store}>
            <Component {...pageProps} />;
          </Provider>
        </statusContext.Provider>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default MyApp;
