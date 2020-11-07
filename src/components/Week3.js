import React from 'react';
import '../App.css';
import {Card, Button, Container} from 'react-bootstrap';
import b1984 from '../images/b1984.jpg';
import hobbit from '../images/hobbit.jpg';
import horror1 from '../images/horror1.jpg';
import wellmet from '../images/wellmet.jpg';
import Navigation2 from '../components/Navigation2';
import Footer from '../Footer';
function Week3(){
    return(
        <>
        <Navigation2/>
        <Container maxWidth="130rem">
        <Card  centered ='true'>
          <Card.Header>Classic 16/11/2020</Card.Header>
          <Card.Title>1984</Card.Title>
          <Card.Body>
            <img src={b1984}/>
            <Card.Text>
            Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell.
            </Card.Text>
            
            <Button href="/bookingdone" variant="secondary">Book a session</Button>
          </Card.Body>
        </Card>
        
        <Card  centered ='true'>
        <Card.Header>Fantasy 18/11/2020</Card.Header>
        <Card.Title>The Hobbit</Card.Title>
        <Card.Body>
          <img src={hobbit}/>
          <Card.Text>
          In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort. Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent.
          </Card.Text>
          <Button href="/bookingdone" variant="secondary">Book a session</Button>
        </Card.Body>
      </Card>
      
      <Card  centered ='true'>
          <Card.Header>Horror 20/11/2020</Card.Header>
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
          <Card.Header>Romance 22/11/2020</Card.Header>
          <Card.Title>Well Met</Card.Title>
          <Card.Body>
            <img src={wellmet}/>
            <Card.Text>
            Emily knew there would be strings attached when she relocated to the small town of Willow Creek, Maryland, for the summer to help her sister recover from an accident, but who could anticipate getting roped into volunteering for the local Renaissance Faire alongside her teenaged niece? Or that the irritating and inscrutable schoolteacher in charge of the volunteers would be so annoying that she finds it impossible to stop thinking about him?

            </Card.Text>
            <Button href="/bookingdone" variant="secondary">Book a session</Button>
          </Card.Body>
        </Card>
        </Container>
        <Footer/>
       </>
        
    )
}
export default Week3; 