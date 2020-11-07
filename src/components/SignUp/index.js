import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import { withFirebase } from '../Firebase';
import{Nav,Navbar, FormGroup, Form} from 'react-bootstrap';
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };
  const SignUpPage = () => (
    <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">VBooker </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            
          </Nav>
          <Nav.Link href="/signin">Sign in</Nav.Link>
          
        </Navbar.Collapse>
      </Navbar>
      
      <SignUpForm />
    </div>
  );
  
 
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    
    this.state = { ...INITIAL_STATE };
  }
  
 
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
 
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        
        this.props.history.push('/au');
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
 
 
    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup>
        <Form.Label>Username</Form.Label>
        <h1></h1>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        </FormGroup>
        <FormGroup>
            <Form.Label>Email Address</Form.Label>
            <h1></h1>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        </FormGroup>
        <FormGroup>
        <Form.Label>Password</Form.Label>
        <h1></h1>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        </FormGroup>
        <FormGroup>
            <Form.Label>Confirm Password</Form.Label>
            <h1></h1>
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        </FormGroup>
        <button disabled={isInvalid} type="submit">Sign Up</button>
 
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
 
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={'/signup'}>Sign Up</Link>
  </p>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
 
export { SignUpForm, SignUpLink, SignUpPage };