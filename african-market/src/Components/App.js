import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    <Router>
      <div className="App">
      <PublicHeader />
<<<<<<< HEAD
=======
      <Router>
        <Switch>
>>>>>>> a206d7ddc147611d7d4afdc9b7328b3bfef80efa
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={SignForm} />
        <Route path="/addproduct" component={AddProduct}/>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
<<<<<<< HEAD
=======
        </Switch>
      </Router>
>>>>>>> a206d7ddc147611d7d4afdc9b7328b3bfef80efa
      <PublicFooter />
      </div>
    </Router>
  );
}

export default App;
