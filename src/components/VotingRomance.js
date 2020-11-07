import React from 'react';
import '../App.css';
import {Card, Button} from 'react-bootstrap';
import kissquotient from '../images/kissquotient.jpg';
import faultstars from '../images/faultstars.jpg';
import ps from '../images/ps.jpg';
import Navigation2 from '../components/Navigation2';
function VotingRomance(){
    return(
        <>
        <Navigation2/>
        <Card  centered ='true'>
          <Card.Header>The Kiss Quotient</Card.Header>
          <Card.Body>
            <img src={kissquotient}/>
            <Card.Text>
            Stella Lane is a thirty-year old woman with no dating experience. It doesn't help that Stella has Asperger's and French kissing reminds her of a shark getting its teeth cleaned by pilot fish. Her conclusion: she needs lots of practice — with a professional. Which is why she hires escort Michael Phan. 
            </Card.Text>
            
            <Button href="/votingdone" variant="secondary">Vote</Button>
          </Card.Body>
        </Card>
        
        <Card  centered ='true'>
        <Card.Header>P.S.I Love You</Card.Header>
        <Card.Body>
          <img src={ps}/>
          <Card.Text>
          Holly couldn't live without her husband Gerry, until the day she had to. They were the kind of young couple who could finish each other's sentences. When Gerry succumbs to a terminal illness and dies, 30-year-old Holly is set adrift, unable to pick up the pieces. But with the help of a series of letters her husband left her before he died and a little nudging from an eccentric assortment of family and friends, she learns to laugh, overcome her fears, and discover a world she never knew existed.
          </Card.Text>
          <Button href="/votingdone" variant="secondary">Vote</Button>
        </Card.Body>
      </Card>
      
      <Card  centered ='true'>
          <Card.Header>The Fault in Our Stars</Card.Header>
          <Card.Body>
            <img src={faultstars}/>
            <Card.Text>
            Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.
            </Card.Text>
            <Button href="/votingdone" variant="secondary">Vote</Button>
          </Card.Body>
        </Card>
       </>
        
    )
}
export default VotingRomance; 