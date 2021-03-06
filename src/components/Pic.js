import React from 'react'
import { Image, Reveal, Grid, Container } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";
import Sid from '../images/sid.jpg'

const Pic = () => (
  <div>
    <Grid divided='vertically'>
      <Grid.Row columns={2}>
        <Grid.Column width={2}>
          <Reveal animated='small fade'>
            <Reveal.Content visible>
              <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src={Sid} size='small' />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
        <Grid.Column width={10}><h1>Hi i am sid </h1></Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default Pic