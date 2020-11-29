import React, { createContext, useState } from "react";
import { Homepage } from "./Homepage/Homepage";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

export const statusContext = createContext<any>(false);

export default function Home() {
  const [status, setStatus] = useState(false);
  return (
    <div className="App">
      <statusContext.Provider value={{ status, setStatus }}>
        <ApolloProvider client={client}>
          <Homepage />
        </ApolloProvider>
      </statusContext.Provider>
    </div>
  );
}
