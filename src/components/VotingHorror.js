import React from 'react';
import '../App.css';
import {Card, Button} from 'react-bootstrap';
import it from '../images/it.jpg';
import exorcist from '../images/exorcist.jpg';
import omen from '../images/omen.jpg';
import Navigation2 from '../components/Navigation2';
function VotingHorror(){
    return(
        <>
        <Navigation2/>
        <Card  centered ='true'>
          <Card.Header>It</Card.Header>
          <Card.Body>
            <img src={it}/>
            <Card.Text>
            Welcome to Derry, Maine ... It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real ... They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But none of them can withstand the force that has drawn them back to Derry to face the nightmare without an end, and the evil without a name.
            </Card.Text>
            
            <Button href="/votingdone" variant="secondary">Vote</Button>
          </Card.Body>
        </Card>
        
        <Card  centered ='true'>
        <Card.Header>The Exorcist</Card.Header>
        <Card.Body>
          <img src={exorcist}/>
          <Card.Text>
          Four decades after it first terrified the world, William Peter Blatty’s The Exorcist is back! An extraordinary classic work of horror and dark paranormal suspense. In this stunning 40th Anniversary Edition, a desperate mother and two priests fight to free the soul of a little girl from a supernatural entity of pure malevolence.
          </Card.Text>
          <Button href="/votingdone" variant="secondary">Vote</Button>
        </Card.Body>
      </Card>
      
      <Card  centered ='true'>
          <Card.Header>The Omen</Card.Header>
          <Card.Body>
            <img src={omen}/>
            <Card.Text>
            Now updated, this classic tale of the antichrist who comes to Earth in the form of a young boy is available in time for 20th Century Fox's contemporary remake of the 1976 classic film, starring Liev Schreiber, Julia Stiles, and Mia Farrow, scheduled for release on June 6, 2006. Reissue
            </Card.Text>
            <Button href="/votingdone" variant="secondary">Vote</Button>
          </Card.Body>
        </Card>
       </>
        
    )
}
export default VotingHorror; 