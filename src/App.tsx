import * as React from "react";
import "./styles.css";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import Books from "./Books";
const link = createHttpLink({
  uri: "https://graphql-server-example-tw.herokuapp.com/graphql"
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

client
  .query({
    query: gql`
      query GetBooks {
        books {
          title
        }
      }
    `
  })
  .then((result) => console.log(result));

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Books />
      </div>
    </ApolloProvider>
  );
}
