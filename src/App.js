import React, { Component } from 'react';
import {Router, Route} from "react-router";
import { createBrowserHistory } from 'history';
import whitAuth from "./middlewares"
import NewStorie from "./views/newStorie";
import LoadStorie from "./views/loadStorie";
import EditProfile from "./views/editProfile";
import Root from "./views/root";
import ListStories from "./views/listStories";
import {setState} from "./actionCreators";
import store from "./store";
import './App.css';


const history = createBrowserHistory();


store.dispatch(setState());
localStorage.removeItem('token'); 

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={Root} />
        <Route exact path="/newStorie" component={whitAuth(NewStorie)} />
        <Route exact path="/:id/EditProfile" component={whitAuth(EditProfile)} />
        <Route exact path="/:id/listStories" component={whitAuth(ListStories)} />
        <Route exact path="/storie/:id" component={LoadStorie} />
      </Router>
    );
  }
}

export default App;
