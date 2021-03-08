import React from "react";
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
import BasicContainer from "./BasicContainer";

const Home = () => {
  return (
    <BasicContainer>
      <Divider />
      <Header as="h2">
        <Icon name="home" />
        <Header.Content>Welcome everyone</Header.Content>
      </Header>
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <p>
              <Image src={Rainbow} size="large" />
            </p>
          </Grid.Column>
          <Grid.Column>
            <p>Welcome everyone to my website!!!</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Divider />
    </BasicContainer>
  );
};

export default Home;
