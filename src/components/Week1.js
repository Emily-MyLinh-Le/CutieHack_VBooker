import React from 'react';
import '../App.css';
import {Card, Button, Container} from 'react-bootstrap';
import classic1 from '../images/classic1.jpg';
import fantasy1 from '../images/fantasy1.jpg';
import horror1 from '../images/horror1.jpg';
import hatinggame from '../images/hatinggame.jpg';
import Navigation2 from '../components/Navigation2';
import Footer from '../Footer';
function Week1(){
    return(
        <>
        <Navigation2/>
        <Container maxWidth="130rem">
        <Card  centered ='true'>
          <Card.Header>Classic 01/11/2020</Card.Header>
          <Card.Title>Romeo and Juliet</Card.Title>
          <Card.Body>
            <img src={classic1}/>
            <Card.Text>
            In Romeo and Juliet, Shakespeare creates a violent world, in which two young people fall in love. It is not simply that their families disapprove; the Montagues and the Capulets are engaged in a blood feud. In this death-filled setting, the movement from love at first sight to the lovers’ final union in death seems almost inevitable.
            </Card.Text>
            
            <Button href="/bookingdone" variant="secondary">Book a session</Button>
          </Card.Body>
        </Card>
        
        <Card  centered ='true'>
        <Card.Header>Fantasy 03/11/2020</Card.Header>
        <Card.Title>Ender's Game</Card.Title>
        <Card.Body>
          <img src={fantasy1}/>
          <Card.Text>
          Andrew "Ender" Wiggin thinks he is playing computer simulated war games; he is, in fact, engaged in something far more desperate. The result of genetic experimentation, Ender may be the military genius Earth desperately needs in a war against an alien enemy seeking to destroy all human life. 
          </Card.Text>
          <Button href="/bookingdone" variant="secondary">Book a session</Button>
        </Card.Body>
      </Card>
      
      <Card  centered ='true'>
          <Card.Header>Horror 05/11/2020</Card.Header>
          <Card.Title>The Shining</Card.Title>
          <Card.Body>
            <img src={horror1}/>
            <Card.Text>
            Jack Torrance's new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he'll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote...and more sinister 
            </Card.Text>
            <Button href="/bookingdone" variant="secondary">Book a session</Button>
          </Card.Body>
        </Card>

        <Card  centered ='true'>
          <Card.Header>Romance 07/11/2020</Card.Header>
          <Card.Title>The Hating Game</Card.Title>
          <Card.Body>
            <img src={hatinggame}/>
            <Card.Text>
            Lucy Hutton has always been certain that the nice girl can get the corner office. She’s charming and accommodating and prides herself on being loved by everyone at Bexley & Gamin. Everyone except for coldly efficient, impeccably attired, physically intimidating Joshua Templeman. And the feeling is mutual.

            </Card.Text>
            <Button href="/bookingdone" variant="secondary">Book a session</Button>
          </Card.Body>
        </Card>
        </Container>
        <Footer/>
       </>
        
    )
}
export default Week1; 