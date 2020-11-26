import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Front from './components/front-page';
import BCS from './components/About BCS';
import Profile from './components/User-profile';
import Register from './components/Register';
import TopBar from './components/Navbar';
import JobAid from './components/Job-Aid';
import Login from './components/Register/login';



function App() {
  
  return (
    <div className="App">
      <Router>
      <TopBar />
        <Switch>
          <Route path="/" component={Front} exact>
          </Route>

          <Route path="/register" component={Register} exact>
          </Route>

          <Route path="/login" component={Login} exact>
          </Route>

          <Route path="/about-bcs" component={BCS} exact>
          </Route>
          <Route path="/profile" component={Profile} exact>
          </Route>
          
          <Route path="/job-aid" component={JobAid} exact>
          </Route>
        </Switch>
        
      </Router>

    </div>
  );
  
}




export default App;
