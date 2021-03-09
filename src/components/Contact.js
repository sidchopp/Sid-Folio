import React from "react";

import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Divider,
  Header,
  Icon,
  Segment,
  Grid,
  Image,
} from "semantic-ui-react";
import Page from "./Page";
import Face from "../images/face.jpg";



function Contact() {

  return (
    <Page title="Contact Me">
      <Divider />
      <Header as="h2">
        <Icon name="envelope" />
        <Header.Content>Please fill the Contact form</Header.Content>
      </Header>
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <p>
              <Image src={Face} size="huge" />
            </p>
          </Grid.Column>
          <Grid.Column>
            <Form>
              <Form.Group widths="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="First name"
                  placeholder="First name"
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Last name"
                  placeholder="Last name"
                />
              </Form.Group>
              <Form.Field
                id="form-textarea-control-message"
                control={TextArea}
                label="Message"
                placeholder="Message"
              />
              <Form.Field
                id="form-input-control-error-email"
                control={Input}
                label="Email"
                placeholder="you@example.com"
                error={{
                  content: "Please enter a valid email address",
                  pointing: "below",
                }}
              />
              <Button inverted color="green" >
                Send
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>

      <Divider />
    </Page>
  );
}

export default Contact;
