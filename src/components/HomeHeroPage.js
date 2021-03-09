import React from "react";
import { Segment, Header, Icon, Button, Container } from "semantic-ui-react";

function HomeHeroPage() {
  return (
    <>
      <Segment inverted>
        <Container textAlign="center">
          <Header
            inverted
            as="h1"
            content="Siddharth Chopra"
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: "2em",
            }}
          />
          <Header
            inverted
            as="h2"
            content="A Tech Enthusiast and Physics Lover."
            style={{
              fontSize: "1.7em",
              fontWeight: "normal",
              marginTop: "1.5em",
            }}
          />
          <Button
            style={{ marginTop: "1.5em", marginBottom: "6em" }}
            primary
            size="huge"
          >
            Get Started
            <Icon name="right arrow" />
          </Button>
        </Container>
      </Segment>
    </>
  );
}

export default HomeHeroPage;
