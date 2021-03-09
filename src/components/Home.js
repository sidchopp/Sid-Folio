import React from "react";

import {
  Divider,
  Segment,
  Grid,
  Image,
  Header,
  Icon,
} from "semantic-ui-react";
import Face from "../images/face.jpg";
import Page from "./Page";

const Home = () => {
  return (
    <Page title="Welcome">
      <Divider />
      <Header as="h2">
        <Icon name="home" />
        <Header.Content>Welcome everyone</Header.Content>
      </Header>
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <p>
              <Image src={Face} size="huge" />
            </p>
          </Grid.Column>
          <Grid.Column>
            <p>Welcome everyone to my website!!!</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Divider />

    </Page>
  );
};

export default Home;
