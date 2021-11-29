import './App.css';
import { ApolloProvider, ApolloClient, createHttpLink } from "@apollo/client";
import IndexUsuarios from "./pages/usuarios/index.js"
import { Route, Router,  } from "react-router-dom";

const httpLink = createHttpLink({
  uri: "http://servidor-gql-innovatic.herokuapp.com/graphql"
})

const client = new ApolloClient({
  uri: httpLink,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>

    </ApolloProvider>
  );
}

export default App;
