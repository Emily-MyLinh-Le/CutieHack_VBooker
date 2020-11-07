import React from 'react';
import '../App.css';
import {Card, Button, Container} from 'react-bootstrap';
import greatgatsby from '../images/greatgatsby.jpg';
import eragon from '../images/eragon.jpg';
import carrie from '../images/carrie.jpg';
import bridetest from '../images/bridetest.jpg';
import Navigation2 from '../components/Navigation2';
import Footer from '../Footer';
function Week2(){
    return(
        <>
        <Navigation2/>
        <Container maxWidth="130rem">
        <Card  centered ='true'>
          <Card.Header>Classic 08/11/2020</Card.Header>
          <Card.Title>The Great Gatsby</Card.Title>
          <Card.Body>
            <img src={greatgatsby}/>
            <Card.Text>
            The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted "gin was the national drink and sex the national obsession," it is an exquisitely crafted tale of America in the 1920s.
            </Card.Text>
            
            <Button href="/bookingdone" variant="secondary">Book a session</Button>
          </Card.Body>
        </Card>
        
        <Card  centered ='true'>
        <Card.Header>Fantasy 10/11/2020</Card.Header>
        <Card.Title>Eragon</Card.Title>
        <Card.Body>
          <img src={eragon}/>
          <Card.Text>
          When Eragon finds a polished blue stone in the forest, he thinks it is the lucky discovery of a poor farm boy; perhaps it will buy his family meat for the winter. But when the stone brings a dragon hatchling, Eragon soon realizes he has stumbled upon a legacy nearly as old as the Empire itself.

          </Card.Text>
          <Button href="/bookingdone" variant="secondary">Book a session</Button>
        </Card.Body>
      </Card>
      
      <Card  centered ='true'>
          <Card.Header>Horror  13/11/2020</Card.Header>
          <Card.Title>Carrie</Card.Title>
          <Card.Body>
            <img src={carrie}/>
            <Card.Text>
            A modern classic, Carrie introduced a distinctive new voice in American fiction -- Stephen King. The story of misunderstood high school girl Carrie White, her extraordinary telekinetic powers, and her violent rampage of revenge, remains one of the most barrier-breaking and shocking novels of all time
            </Card.Text>
            <Button href="/bookingdone" variant="secondary">Book a session</Button>
          </Card.Body>
        </Card>
       

       <Card  centered ='true'>
          <Card.Header>Romance  15/11/2020</Card.Header>
          <Card.Title>The Bride Test</Card.Title>
          <Card.Body>
            <img src={bridetest}/>
            <Card.Text>
            Khai Diep has no feelings. Well, he feels irritation when people move his things or contentment when ledgers balance down to the penny, but not big, important emotions—like grief. And love. He thinks he’s defective. Enters single-mom Esme Tran. With Esme’s time in the United States dwindling, Khai is forced to understand he’s been wrong all along. And there’s more than one way to love.
            </Card.Text>
            <Button href="/bookingdone" variant="secondary">Book a session</Button>
          </Card.Body>
        </Card>
        </Container>
        <Footer/>
       </>
        
    )
}
export default Week2; 