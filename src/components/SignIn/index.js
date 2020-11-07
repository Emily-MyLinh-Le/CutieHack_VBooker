import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp/index';
import { withFirebase } from '../Firebase';
import {FormGroup, Form } from 'react-bootstrap';
import {  Navbar, Nav} from 'react-bootstrap';


 
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
 
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { email, password } = this.state;
 
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, password, error } = this.state;
 
    const isInvalid = password === '' || email === '';
 
    return (
        
      <form onSubmit={this.onSubmit}>
        <FormGroup controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <h1></h1>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        </FormGroup>
        
        <FormGroup controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <h1></h1>
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        </FormGroup>
        <button variant = "secondary" disabled={isInvalid} type="submit">
          Sign In
        </button>
 
        {error && <p>{error.message}</p>}
        
      </form>
      
    );
  }
}
 
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
const SignInPage = () => (
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
      <SignInForm />
      <SignUpLink />
    </div>
  );
 
export default SignInPage;
 
export { SignInForm, SignInPage };