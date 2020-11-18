import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
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
    
    
<Router >

<PublicHeader />
     
<Switch>
   
     <Route path="/login" component={withRouter(Login)} />
     <Route path="/signup" component={SignForm} />
     <Route path="/addproduct" component={AddProduct}/>
     <PrivateRoute exact path="/dashboard" component={Dashboard} />
     <Route exact path="/" component={withRouter(Home)}/>
     </Switch>
   <PublicFooter />

</Router>

  );
}

export default App;
