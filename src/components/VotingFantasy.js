import React from 'react';
import '../App.css';
import {Card, Button} from 'react-bootstrap';
import caraval from '../images/caraval.jpg';
import giver from '../images/giver.jpg';
import northernlights from '../images/northernlights.jpg';
import Navigation2 from '../components/Navigation2';
function VotingFantasy(){
    return(
        <>
        <Navigation2/>
        <Card  centered ='true'>
          <Card.Header>The Giver</Card.Header>
          <Card.Body>
            <img src={giver}/>
            <Card.Text>
            Twelve-year-old Jonas lives in a seemingly ideal world. Not until he is given his life assignment as the Receiver does he begin to understand the dark secrets behind this fragile community.
            </Card.Text>
            
            <Button href="/votingdone" variant="secondary">Vote</Button>
          </Card.Body>
        </Card>
        
        <Card  centered ='true'>
        <Card.Header>Caraval</Card.Header>
        <Card.Body>
          <img src={caraval}/>
          <Card.Text>
          Scarlett Dragna has never left the tiny island where she and her sister, Tella, live with their powerful, and cruel, father. Now Scarlett’s father has arranged a marriage for her, and Scarlett thinks her dreams of seeing Caraval—the faraway, once-a-year performance where the audience participates in the show—are over. But this year, Scarlett’s long-dreamt-of invitation finally arrives. With the help of a mysterious sailor, Tella whisks Scarlett away to the show. Only, as soon as they arrive, Tella is kidnapped by Caraval’s mastermind organizer, Legend. It turns out that this season’s Caraval revolves around Tella, and whoever finds her first is the winner.
          </Card.Text>
          <Button href="/votingdone" variant="secondary">Vote</Button>
        </Card.Body>
      </Card>
      
      <Card  centered ='true'>
          <Card.Header>Northern Lights</Card.Header>
          <Card.Body>
            <img src={northernlights}/>
            <Card.Text>
            When Lyra's friend Roger disappears, she and her dæmon, Pantalaimon, determine to find him. The ensuing quest leads them to the bleak splendour of the North, where armoured bears rule the ice and witch-queens fly through the frozen skies - and where a team of scientists is conducting experiments too horrible to be spoken about. Lyra overcomes these strange terrors, only to find something yet more perilous waiting for her - something with consequences which may even reach beyond the Northern Lights...
            </Card.Text>
            <Button href="/votingdone" variant="secondary">Vote</Button>
          </Card.Body>
        </Card>
       </>
        
    )
}
export default VotingFantasy; 