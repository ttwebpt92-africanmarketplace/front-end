import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
    <div>
      African Market
    </div>
    <Router>
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <Route path='/home' component={Home} />
      <Route path='/login' component={Login} />
    </Router>
    </div>

  
  );
}

export default App;
