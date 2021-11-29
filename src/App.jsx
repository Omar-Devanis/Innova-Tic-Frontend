import './styles/style.css';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import IndexUsuarios from "./pages/usuarios/index.jsx"
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import { Login } from "./pages/auth/login.jsx";
import { Register } from "./pages/auth/register.jsx";

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
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
