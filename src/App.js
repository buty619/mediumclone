import React, { Component } from 'react';
import {Router, Route} from "react-router";
import { createBrowserHistory } from 'history';
import whitAuth from "./middlewares"
import newStorie from "./views/newStorie";
import loadStorie from "./views/loadStorie";
import editProfile from "./views/editProfile";
import root from "./views/root";
import {setState} from "./actionCreators";
import store from "./store";
import './App.css';


const history = createBrowserHistory();

store.dispatch(setState());

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={root} />
        <Route exact path="/new" component={whitAuth(newStorie)} />
        <Route exact path="/load" component={whitAuth(loadStorie)} />
        <Route exact path="/:id/EditProfile" component={whitAuth(editProfile)} />
      </Router>
    );
  }
}

export default App;
