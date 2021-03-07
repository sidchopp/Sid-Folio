import React from "react";
import { Image } from 'semantic-ui-react'
import Sid from "../images/sid.jpg";



const About = () => {
  return (
  <div>
    <Image src ={Sid} centered />
    This is about me
    </div>
    );
};

export default About;
