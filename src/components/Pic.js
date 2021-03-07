import React from "react";
import { Image, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Sid from "../images/sid.jpg";

const Pic = () => (
  <div>
    <Container>
      <Image src={Sid} size = 'big' centered rounded  />
     </Container>
  </div>
);

export default Pic;
