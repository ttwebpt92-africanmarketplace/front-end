import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";

function App() {
  return (
    <div>
      <PublicHeader />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Router>
      <PublicFooter />
    </div>
  );
}

export default App;
