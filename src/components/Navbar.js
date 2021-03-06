import React, { Component } from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

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
              <Icon.Group size='big'>
                <Icon name='fighter jet' />
              </Icon.Group>
            </Menu.Item>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='messages'
              active={activeItem === 'messages'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='friends'
              active={activeItem === 'friends'}
              onClick={this.handleItemClick}
            />
          </Menu>

        </Segment>
      </div>

    )
  }
}