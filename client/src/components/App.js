import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import Navbar from './Navbar';
import Landing from './LandingPage';
import Dashboard from "./Dashboard";

const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component{

  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact={true} path="/" component={Landing} />
            <Route exact={true} path="/dashboard" component={Dashboard} />
            <Route path="/waitlist/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
