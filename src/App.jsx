import './styles/style.css';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Login } from "./pages/auth/login.jsx";
import { Register } from "./pages/auth/register.jsx";
import { Layout } from "./layouts/layout.jsx";
import { IndexUsuarios } from "./pages/usuarios/index.jsx";
import { Sidebar } from './components/sidebar';

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
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' exact /> 
          <Route path='/register' element={<Register />} exact/>
          <Route path='/login' element={<Login />} exact/>
          {/* <Route path='/admin' element={<Layout />} exact>
            <Route path='/usuarios' element={<IndexUsuarios />} exact/>
          </Route> */}
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
