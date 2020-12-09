import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../components/reducers/reducers";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const store = createStore(reducer);

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <React.Fragment>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </React.Fragment>
    </ApolloProvider>
  );
}

export default MyApp;
