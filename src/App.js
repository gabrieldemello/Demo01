import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './pages/Users/components/layout/Navbar';
import UserProfile from './pages/Users/components/users/UserProfile';
import Alert from './pages/Users/components/layout/Alert';

import Home from './pages/Users/components/pages/Home';
import About from './pages/Users/components/pages/About';

import GithubState from './pages/Users/context/github/GithubState';
import AlertState from './pages/Users/context/alert/AlertState';
import './pages/Users/App.css';
import NotFound from './pages/Users/components/pages/NotFound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={UserProfile} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;