import React from 'react';
import {Dropdown} from 'react-bootstrap';
import Navigation2 from '../components/Navigation2';
import '../App.css';
function Voting(){
    return(
        <>
        <Navigation2/>
        <header className="App-header">
          
            <h1> Voting 4th Week of November</h1>
            <h1>This is a where you can vote for the books you want to discuss.</h1>
            <h1>Results will be out on 14/11/2020.</h1>
            <h1></h1>
            <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Genre
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/voting/classic">Classic</Dropdown.Item>
                <Dropdown.Item href="/voting/fantasy">Fantasy</Dropdown.Item>
                
                <Dropdown.Item href="/voting/horror">Horror</Dropdown.Item>
                
                <Dropdown.Item href="/voting/romance">Romance</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </header>
       </>
        
    )
}
export default Voting;