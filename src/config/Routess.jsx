import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import Signin from "pages/Signin";
import Catalog from "pages/Catalog";
import Detail from "pages/detail/Detail";

function Routess() {
  return (
    <Switch>
      <Route path="/signin" exact component={Signin} />
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
}

export default Routess;
