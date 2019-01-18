// NavLink will activate the 'active' class on nav links so that it changes color

//IMPORTANT: You only get Route props (like history object) if you are inside a <Route />.
//withRouter is a higher order component that will take a component and return it with Route properties. Since our NavBar is not part of a Route component (it sits outside the Routes), we can use withRouter to give it routing features like props.history.push('/') to be able to use the router to show the home page component or other components. Without it, the methods like handleSignOut would not be able to use props.history.push('/') to take users to the home page after logout. See example below

import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import SignedOutMenu from "../Menu/SignedOutMenu";
import SignedInMenu from "../Menu/SignedInMenu";

class NavBar extends Component {
  state = {
    authenticated: false
  };

  handleSignIn = () => {
    this.setState({
      authenticated: true
    });
  };

  handleSignOut = () => {
    this.setState({
      authenticated: false
    });
    this.props.history.push('/')
  };

  render() {
    const { authenticated } = this.state;

    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          {authenticated && 
          <Menu.Item as={NavLink} to="/people" name="People" /> }
          {authenticated && 
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            /> }
          </Menu.Item>
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
