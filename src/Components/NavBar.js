import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {BrowserRouter as NavLink} from 'react-router-dom'
export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        > <NavLink
      to="/"
    >
          Home
          </NavLink>
        </Menu.Item>

        <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
          Login
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Sign Up
        </Menu.Item>
      </Menu>
    )
  }
}