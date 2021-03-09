import React from "react";
import {
  Divider,
  Segment,
  Grid,
  Image,
  Header,
  Button,
  Container,
} from "semantic-ui-react";

import Fusion from "../images/fusion.PNG";

function HomeContent() {
  return (
    <>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row style={{ marginBottom: "4em" }}>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Recent Project-FUSION
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Fusion was created by a member of Tech and Innovation industry
                in Alberta and four learners of the Full Stack Development
                program at{" "}
                <a
                  href="https://www.evolveu.ca/"
                  target="_blank"
                  rel="noreferrer"
                >
                  EvolveU
                </a>
                , Calgary, Alberta
              </p>
              {/* <Header as='h3' style={{ fontSize: '2em' }}>
                We Make Bananas That Can Dance
            </Header>
              <p style={{ fontSize: '1.33em' }}>
                Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                bioengineered.
            </p> */}
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image bordered rounded size="large" src={Fusion} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button
                size="huge"
                as="a"
                href="https://fusion-alberta.herokuapp.com/"
                target="_blank"
              >
                Check it Out
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Container text>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        ></Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          My Life before Stack Developer
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          I was a full time Physics teacher till 2019.
        </p>
        <Button as="a" size="large">
          Want to know more?
        </Button>
      </Container>

      <Divider />
    </>
  );
}

export default HomeContent;
