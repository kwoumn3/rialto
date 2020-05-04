import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Bulletin from "./pages/Bulletin";

export default class App extends React.Component {
  render() {
    const name = "Tyrome";
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/bulletin">
            <Bulletin/>
          </Route>
        </Switch>
      </Router>
    )
  }

}
