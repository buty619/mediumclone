import React, { Component } from 'react';
import {Redirect} from "react-router";

export default function(ComposedComponent) {
  class whitAuth extends Component {
    render() {
      if(!localStorage.getItem("token")) {
        return <Redirect to={{ pathname: '/'}} />
      }else{
        return <ComposedComponent {...this.props}/>
      }      
    }
  }
  return whitAuth
}