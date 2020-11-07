import React from 'react';

import Navigation2 from './Navigation2';
import '../App.css';
import { Button } from 'react-bootstrap';
function BookingDone(){
    return(
        <>
        <Navigation2/>
        <header className="App-header">
            <h1></h1>
            <h1></h1>
          <h1>Thank you for booking this session!</h1>
          <h1>The link to the session will be sent to you a day before the session.</h1>
          
          <h1></h1>
          <h1></h1>
           <Button variant = "secondary" href="/au">Home</Button>
          
            
        </header>
       </>
        
    )
}
export default BookingDone;