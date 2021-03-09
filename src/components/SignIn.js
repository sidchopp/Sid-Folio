import React, { useState } from "react";
import Axios from "axios";
import { Button, Form, Divider, Header, Icon, Segment, Grid, Image } from "semantic-ui-react";
import Page from "./Page";
import Face from "../images/face.jpg";

function SignIn() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:8181/register", {
        username,
        email,
        password,
      });
      console.log("success!!!");
      // for microsoft edge browser we write "catch(e)"", otherwise for rest "catch" works fine
    } catch (e) {
      console.log("Failed!!!");
    }
  }
  return (
    <Page title="Sign In">
      <Divider />
      <Header as="h2">
        <Icon name="envelope" />
        <Header.Content>Please fill the Sign in form</Header.Content>
      </Header>
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <p>
              <Image src={Face} size="huge" />
            </p>
          </Grid.Column>
          <Grid.Column>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>Username</label>
                <input
                  placeholder="Pick a username"
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  placeholder="you@example.com"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  placeholder="Create a password"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
      <Divider />
    </Page>
  );
}

export default SignIn;
