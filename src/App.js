import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation';
import Navigation2 from './components/Navigation2';



import Week1 from './components/Week1';
import Week2 from './components/Week2';
import Week3 from './components/Week3';
import Voting from './components/Voting';
import VotingDone from './components/VotingDone';
import VotingClassic from './components/VotingClassic';
import VotingRomance from './components/VotingRomance';
import VotingHorror from './components/VotingHorror';
import VotingFantasy from './components/VotingFantasy';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {SignUpForm, SignUpLink}from './components/SignUp/index.js';

import logo from './images//logo.jpg';
import { SignInPage } from './components/SignIn/index';


function App() {
    return(
        <Router>
        <div className ="App">
          
          <Switch>
            <Route path ="/au"exact component={Home2}/>
            <Route path ="/voting/classic" component={VotingClassic}/>
            <Route path ="/voting/romance" component={VotingRomance}/>
            <Route path ="/voting/horror" component={VotingHorror}/>
            <Route path ="/voting/fantasy" component={VotingFantasy}/>
            <Route path ="/" exact component = {Home1}/>
            <Route path="/signin" component = {SignInPage}/>
            <Route path ="/signup" component = {SignUpForm}/>
            <Route path = "/week/1-11-20" component = {Week1}/>
            <Route path = "/week/2-11-20" component = {Week2}/>
            <Route path = "/week/3-11-20" component = {Week3}/>
            <Route path ="/voting"component = {Voting}/>
            <Route path ="/votingdone"component = {VotingDone}/>
            
          </Switch>
        </div>
        </Router>
    );
    }  
    const Home2 = () => (
      <div className="App">
        <Navigation2/>
        <header className="App-header">
          
          <h1> You can now book discussion slots for the 3rd week of November</h1>
          <h1></h1>
          <h1>Voting for the 4th week of November is now open! </h1>
    
        </header>
        
      </div>
    )


    const Home1 = () => (
  <div className="App">
    <Navigation/>
    <header className="App-header">
      <img src={logo} classname ="App-logo" alt ="logo"/>
      <h1> Welcome to VBooker</h1>
      <h1>This is the place for book lovers to meet and discuss books</h1>

    </header>
    
  </div>
)

export default App;
