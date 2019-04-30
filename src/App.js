import React, { Component } from 'react';
import {Router, Route} from "react-router";
import { createBrowserHistory } from 'history';
import newStorie from "./views/newStorie"
import './App.css';


const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={newStorie} />
      </Router>
    );
  }
}

export default App;
