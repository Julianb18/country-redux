import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { BucketList } from "./pages/BucketList";
import Home from "./pages/Home";
import { Visited } from "./pages/Visited";

export const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bucketList" component={BucketList} />
        <Route exact path="/visited" component={Visited} />
      </Switch>
    </Router>
  );
};
