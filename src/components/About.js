import React from "react";
import Page from "./Page";
import {
  Divider,
  Segment,
  Grid,
  Image,
  Header,
  Icon,
} from "semantic-ui-react";

import Rainbow from "../images/rainbow.jpg";

function About() {
  return (
    <Page title="About Me">
      <Divider />
      <Header as="h2">
        <Icon name="graduation cap" />
        <Header.Content>About Me..</Header.Content>
      </Header>
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <p>
              <Image src={Rainbow} size="huge" />
            </p>
          </Grid.Column>
          <Grid.Column>
            <p>Always Curious!!!</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Divider />
    </Page>
  );
};

export default About;
