import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <a href="/">
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        </a>
        <a href="/search">
        <Menu.Item
        name="all_listings" 
        active={activeItem=== 'allListings'}
        onClick={this.handleItemClick}
        >
        All Listings
        </Menu.Item>
        </a>
        {/*<Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
          Login
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Sign Up
        </Menu.Item>}*/}
      </Menu>
    )
  }
}