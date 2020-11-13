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
      {/* <PublicHeader /> */}
    </div>
    <Router>
      <Route  exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
    </Router>
    <div>
      {/* <PublicFooter /> */}
    </div>
    </div>

  
  );
}

export default App;
