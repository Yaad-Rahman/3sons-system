import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Front from './components/front-page';
import BCS from './components/About BCS';
import Profile from './components/User-profile';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JobAid from './components/Job-Aid';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact>
            <Front />
          </Route>
          <Route path="/about-bcs" exact>
            <BCS />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/job-aid" exact>
            <JobAid />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
