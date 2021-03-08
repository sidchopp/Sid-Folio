import React from "react";
import { Link } from 'react-router-dom'
import { Segment, Container, Grid, List, Header, Divider, Image, Icon, } from "semantic-ui-react";
import Sid from "../images/sid.jpg";
import '../stylesheets/style.css'

const Footer = () => {
  return (
    <div>
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="Useful Links" />
              <List link inverted>
                <List.Item as="a">Home</List.Item>
                <List.Item as="a">Contact</List.Item>
                <List.Item as="a">My Resume</List.Item>
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
            <a href="https://github.com/sidchopp" target="_blank" >
              <Icon
                bordered
                inverted
                twitter
                color="black"
                name="github"
                size="large"
              />
            </a>
            <a href="https://www.linkedin.com/in/sidchopp/" target="_blank" >
              <Icon
                bordered
                inverted
                color="black"
                name="linkedin"
                size="large"
              />
            </a>
            <a href="https://www.facebook.com/siddchopp/" target="_blank">

              <Icon
                bordered
                inverted
                color="black"
                name="facebook"
                size="large"
              />
            </a>

            <a href="#">

              <Icon
                bordered
                inverted
                color="black"
                name="twitter"
                size="large"
              />
            </a>
          </div>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
