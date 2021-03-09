import React from "react";
import { Container } from "semantic-ui-react";


function BasicContainer(props) {
  return <Container fluid>{props.children}</Container>;
}

export default BasicContainer;
