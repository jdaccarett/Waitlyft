import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Navbar';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <div className="landing">Landing</div>



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact={true} path="/" component={Landing} />
          <Route exact={true} path="/waitlist" component={Dashboard} />
          <Route path="/waitlist/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
