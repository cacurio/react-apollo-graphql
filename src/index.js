import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import "./styles.css";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});

const CharecterQuery = () => {
  return (
    <Query
      query={gql`
        {
          characters {
            results {
              id
              name
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loanding..</p>;
        if (error) return <p>Error!</p>;

        return data.characters.results.map(character => {
          return <p>{character.name}</p>;
        });
      }}
    </Query>
  );
};

function App() {
  return (
    <div className="App">
      <CharecterQuery />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
