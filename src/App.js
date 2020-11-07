import React from 'react';
import Footer from './Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation';
import Navigation2 from './components/Navigation2';
import logo from './images/logo.png';
import {Card, Button} from 'react-bootstrap';
import discuss from './images/discuss.jpg';
import voting from './images/voting.png';
import calender from './images/calender.png';
import Week1 from './components/Week1';
import Week2 from './components/Week2';
import Week3 from './components/Week3';
import Voting from './components/Voting';
import VotingDone from './components/VotingDone';
import BookingDone from './components/BookingDone';
import VotingClassic from './components/VotingClassic';
import VotingRomance from './components/VotingRomance';
import VotingHorror from './components/VotingHorror';
import VotingFantasy from './components/VotingFantasy';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {SignUpForm, SignUpLink,SignUpPage}from './components/SignUp/index.js';


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
            <Route path ="/signup" component = {SignUpPage}/>
            <Route path = "/week/1-11-20" component = {Week1}/>
            <Route path = "/week/2-11-20" component = {Week2}/>
            <Route path = "/week/3-11-20" component = {Week3}/>
            <Route path ="/voting"component = {Voting}/>
            <Route path ="/votingdone"component = {VotingDone}/>
            <Route path ="/bookingdone"component = {BookingDone}/>
            
          </Switch>
        </div>
        </Router>
    );
    }  
    const Home2 = () => (
      <div className="App">
        <Navigation2/>
        <header className="App-header">
        <img src={logo} classname ="App-logo" alt ="logo"/>
        <h1>Welcome back!</h1>
          
          <h1Style> You can now book discussion slots for the 3rd week of November</h1Style>
          <h1></h1>
          <h1Style>Voting for the 4th week of November is now open! </h1Style>
    
        </header>
        <h1></h1>
    <h1></h1>
    <h1>How it works</h1>
        <div class="flexbox-container">
      
      <Card  style={{ width: '65rem' }}centered ='true'>
          <Card.Header>Voting</Card.Header>
          <Card.Body>
            <img src={voting} classname ="App-logo" alt="logo"/>
            <Card.Text>  </Card.Text>
            <Card.Text>  </Card.Text>
            <Card.Text>
            Every week, you can vote for books to be chosen for discussion for 3 weeks later. You can vote one book for each genre. 
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card  centered ='true'>
          <Card.Header>Booking a session</Card.Header>
          <Card.Body>
          <img src={calender} classname ="App-logo" alt ="logo"/>
            <Card.Text>
            You can book a discussion for your favorite book as soon as it is announced on the website, which is three weeks before the session happens.
            </Card.Text>
            
          </Card.Body>
        </Card>
      <Card  centered ='true'>
          <Card.Header>Discussion session</Card.Header>
          <Card.Body>
          <img src={discuss} classname ="App-logo" alt ="logo"/>
            <Card.Text>  </Card.Text>
            <Card.Text>
            Link to a Zoom call will be sent to you a day before your booked session. Hop in and have fun discussing the books you love with fellow book lovers.
            </Card.Text>
            
          </Card.Body>
        </Card>
    </div>
        <Footer/>
      </div>
    )


    const Home1 = () => (
  <div className="App">
    <Navigation/>
    
    <header className="App-header">
      
      <img src={logo} classname ="App-logo" alt ="logo"/>
      <div>
      <h1>     </h1>
      <h1Style> Welcome to VBooker</h1Style>
      <h1> A virtual book club for book lovers</h1>
      </div>
      <Button href = '/signin'variant="secondary">Sign In</Button>
    </header>
    <h1></h1>
    <h1></h1>
    <h1>How it works</h1>
    <div class="flexbox-container">
      
      <Card style={{ width: '65rem' }} centered ='true'>
          <Card.Header>Voting</Card.Header>
          <Card.Body>
            <img src={voting} classname ="App-logo" alt="logo"/>
            <Card.Text>  </Card.Text>
            <Card.Text>  </Card.Text>
            <Card.Text>
            Every week, you can vote for books to be chosen for discussion for 3 weeks later. You can vote one book for each genre. 
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card  centered ='true'>
          <Card.Header>Booking a session</Card.Header>
          <Card.Body>
          <img src={calender} classname ="App-logo" alt ="logo"/>
            <Card.Text>
            You can book a discussion for your favorite book as soon as it is announced on the website, which is three weeks before the session happens.
            </Card.Text>
            
          </Card.Body>
        </Card>
      <Card  centered ='true'>
          <Card.Header>Discussion session</Card.Header>
          <Card.Body>
          <img src={discuss} classname ="App-logo" alt ="logo"/>
            <Card.Text>  </Card.Text>
            <Card.Text>
            Link to a Zoom call will be sent to you a day before your booked session. Hop in and have fun discussing the books you love with fellow book lovers.
            </Card.Text>
            
          </Card.Body>
        </Card>
    </div>
    
    <Footer/>
  </div>
)

export default App;
