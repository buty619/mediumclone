import React, { Component } from 'react';
import {Router, Route} from "react-router";
import { createBrowserHistory } from 'history';
import newStorie from "./views/newStorie";
import loadStorie from "./views/loadStorie";
import root from "./views/root"
import './App.css';


const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={root} />
        <Route exact path="/new" component={newStorie} />
        <Route exact path="/load" component={loadStorie} />
      </Router>
    );
  }
}

export default App;
