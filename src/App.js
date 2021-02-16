import './App.css';
import {Route, BrowserRouter as Router , Switch} from 'react-router-dom'
import {Login,Home,Error,AuthWrapper,PrivteRoute} from './pages/index'

function App() {
  return (
    <AuthWrapper>
        <Router>
          <Switch>
           <PrivteRoute path="/" exact={true}>
            <Home/>
          </PrivteRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
          </Switch>
        </Router>
      </AuthWrapper>
  );
}

export default App;
