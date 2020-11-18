import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";
import SignForm from './SignForm'
import AddProduct from "./AddProduct"

function App() {
  return (
    <div>
      <PublicHeader />
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignForm} />
        <Route path="/addproduct" component={AddProduct}/>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      
      </Router>
      <PublicFooter />
    </div>
  );
}

export default App;
