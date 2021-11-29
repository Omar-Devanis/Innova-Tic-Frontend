import './styles/style.css';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import { Login } from "./pages/auth/login.jsx";
import { Register } from "./pages/auth/register.jsx";
import { Layout } from "./layouts/layout.jsx";
import { IndexUsuarios } from "./pages/usuarios/index.jsx";

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
      <BrowserRouter>
        <Routes>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='admin' element={<Layout />} >
            <Route path='usuarios' element={<IndexUsuarios />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
