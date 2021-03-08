import React from "react";
import BasicContainer from "./BasicContainer";
import {
  Container,
  Divider,
  Segment,
  Grid,
  Image,
  Header,
  Icon,
} from "semantic-ui-react";

import Rainbow from "../images/rainbow.jpg";

const About = () => {
  return (
    <BasicContainer>
      <Divider />
      <Header as="h2">
        <Icon name="spy" />
        <Header.Content>About Me..</Header.Content>
      </Header>
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <p>
              <Image src={Rainbow} size="large" />
            </p>
          </Grid.Column>
          <Grid.Column>
            <p>Always Curious!!!</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Divider />
    </BasicContainer>
  );
};

export default About;
