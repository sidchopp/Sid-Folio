import React from "react";
import { Link } from 'react-router-dom'
import { Segment, Container, Grid, List, Header, Divider, Image, Button } from "semantic-ui-react";
import Sid from "../images/sid.jpg";


const Footer = () => {
  return (
    <div>
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="Useful Links" />
              <List link inverted>
                <List.Item as={Link} to="">Home</List.Item>
                <List.Item as={Link} to="contact">Contact</List.Item>
                <List.Item as="a">My Resume</List.Item>
                <List.Item as={Link} to="sign-in">Sign In</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header inverted as="h4" content="My Life's Mantra" />
              <h3>
                <i>"Stop not till the goal is reached"</i>
              </h3>
            </Grid.Column>
          </Grid>
          <Divider inverted section />
          <Image centered size="mini" src={Sid} circular />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
          <div>
            <Button circular color='black' icon='github' bordered inverted as='a' href="https://github.com/sidchopp" target="_blank" />
            <Button circular color='black' icon='linkedin' bordered inverted as='a' href="https://www.linkedin.com/in/sidchopp/" target="_blank" />
            <Button circular color='black' icon='facebook' bordered inverted as='a' href="https://www.facebook.com/siddchopp/" target="_blank" />
            <Button circular color='black' icon='twitter' bordered inverted as='a' href="#" target="_blank" />
          </div>
          <div>
            <p style={{ marginTop: '1em' }} >
              Copyright &copy; 2021{" "}
              <a href="/" className="text-muted">
                Sid-Folio
          </a>
        . All rights reserved.
      </p>
          </div>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
