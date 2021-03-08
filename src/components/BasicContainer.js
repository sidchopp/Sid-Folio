import React, { useEffect } from "react";
import { Container, Divider, Segment, Grid, Image } from "semantic-ui-react";
import Rainbow from "../images/rainbow.jpg";

function BasicContainer(props) {
  return <Container>{props.children}</Container>;
}

export default BasicContainer;
