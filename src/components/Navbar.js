import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment, Icon, Header, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Sid from "../images/sid.jpg";

export default class MenuExampleInvertedSegment extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Segment inverted>
          <Menu inverted secondary stackable>
            <Menu.Item>
              {/* <Icon.Group size='big'>
                <Icon name='fighter jet' />
              </Icon.Group> */}
              <Header as='h2'>
                <Image circular src={Sid} /> 
  </Header>
            </Menu.Item>
            <Menu.Item as={Link} to=''
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />

            <Menu.Item as={Link} to='about'
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}

            />

            <Menu.Item as={Link} to='contact'
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}

            />

          </Menu>
        </Segment>
      </div>
    )
  }
}