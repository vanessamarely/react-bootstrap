import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Footer from './../components/Footer/Footer';
import Header from './../components/Header/Header';
import Home from './../container/Home/Home';
import Profile from './../container/Profile/Profile';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Redirect
      from="/"
      to="/home" />
    <Switch>
      <Route path="/home" component={Home} />  
      <Route path="/profile" component={Profile} />  
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Router;