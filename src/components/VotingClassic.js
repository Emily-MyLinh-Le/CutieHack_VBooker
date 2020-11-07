import React from 'react';
import '../App.css';
import {Card, Button, Container} from 'react-bootstrap';
import Hamlet from '../images/Hamlet.jpg';
import Odyssey from '../images/odyssey.jpg';
import mobydick from '../images/mobydick.jpg';
import Navigation2 from '../components/Navigation2';
import Footer from '../Footer';
function VotingClassic(){
    return(
        <>
        <Navigation2/>
        <Container maxWidth="130 rem">
        <Card  centered ='true'>
          <Card.Header>Hamlet</Card.Header>
          <Card.Body>
            <img src={Hamlet}/>
            <Card.Text textAlign="left">
            Hamlet is a story of how the ghost of a murdered king comes to haunt the living with tragic consequences. A vengeful ghost and a brother's murder, dominate the gloomy landscape of Hamlet's Denmark. Hamlet is a story of how the ghost of a murdered king comes to haunt the living with tragic consequences.
            </Card.Text>
            
            <Button href="/votingdone" variant="secondary">Vote</Button>
          </Card.Body>
        </Card>
        
        <Card  centered ='true'>
        <Card.Header>Odyssey</Card.Header>
        <Card.Body>
          <img src={Odyssey}/>
          <Card.Text>
          In the myths and legends that are retold here, Fagles has captured the energy and poetry of Homer's original in a bold, contemporary idiom, and given us an Odyssey to read aloud, to savor, and to treasure for its sheer lyrical mastery.
          </Card.Text>
          <Button href="/votingdone" variant="secondary">Vote</Button>
        </Card.Body>
      </Card>
      
      <Card  centered ='true'>
          <Card.Header>Moby Dick</Card.Header>
          <Card.Body>
            <img src={mobydick}/>
            <Card.Text>
            Moby-Dick is the story of an eerily compelling madman pursuing an unholy war against a creature as vast and dangerous and unknowable as the sea itself. 
            </Card.Text>
            <Button href="/votingdone" variant="secondary">Vote</Button>
          </Card.Body>
        </Card>
        </Container>
        <Footer/>
       </>
        
    )
}
export default VotingClassic; 