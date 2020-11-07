import React from 'react';

import Navigation2 from './Navigation2';
import '../App.css';
import { Button } from 'react-bootstrap';
function VotingDone(){
    return(
        <>
        <Navigation2/>
        <header className="App-header">
            <h1></h1>
            <h1></h1>
          <h1>Thank you for voting! Results will be available on 14//11/2020</h1>
          <Button variant="secondary"href ="/voting">Continue Voting</Button>
          <h1></h1>
          <h1></h1>
           <Button variant = "secondary" href="/au">Home</Button>
          
            
        </header>
       </>
        
    )
}
export default VotingDone;