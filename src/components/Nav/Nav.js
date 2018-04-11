import React, { Component } from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

import { 
  Sidebar, 
  Segment, 
  Button, 
  Menu, 
  Image, 
  Icon,
  Form
} from 'semantic-ui-react';
import logo from '../../assets/logo-new.jpg';
import favicon from '../../assets/favicon.png';

class Nav extends Component {
  state = { 
    visible: false,
    searchQuery: "",
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  userInput = e => {
    let searchQuery = e.target.value;
    this.setState({ searchQuery }, () => {
      console.log(this.state.searchQuery);
    });
  }

  formSubmit = e => {
    
    e.preventDefault();
  }

  render() {
    const { visible } = this.state
    return (
      <div>
        <Menu attached="top">
          <Menu.Menu position="left">
            <Button 
              color="yellow" 
              icon="bars" 
              style={{margin: "5px"}}
              onClick={this.toggleVisibility} />
          </Menu.Menu>
          <Menu.Menu>
            <span className="title">MAMA</span>
            <img 
              src={favicon}
              style={{width: "40px", height: "40px"}} 
              alt="favicon" />
            <span className="title">MIA</span>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Button 
              color="yellow" 
              style={{margin: "5px"}}
              icon="user circle" />
          </Menu.Menu>
        </Menu>
        <Sidebar.Pushable style={{background: "#00b950", margin:"5px"}} as={Segment}>
          <Sidebar 
            as={Menu} 
            animation='push' 
            width='thin' 
            visible={visible} 
            icon='labeled' 
            vertical 
            inverted>
            <Menu.Item name='logo'>
              <Image src={logo} alt="logo"/>
            </Menu.Item>
            <Link onClick={this.toggleVisibility} to={routes.HOME}>
              <Menu.Item name='home'>
                <Icon name='home' />
                Home
              </Menu.Item>
            </Link>
            <Link onClick={this.toggleVisibility} to={routes.RECIPES}>
              <Menu.Item name='food'>
                <Icon name='food' />
                Recipes
              </Menu.Item>
            </Link>
            <Link onClick={this.toggleVisibility} to={routes.PROFILE}>
              <Menu.Item name='user'>
                <Icon name='user circle' />
                Profile
              </Menu.Item>
            </Link>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment attached>
              <Image centered src={logo} alt="logo"/>
              <Form onSubmit={e => this.formSubmit(e)} className="form">
                <input placeholder="e.g. potatoes, onions, garlic" onChange={e => this.userInput(e)}/>
                <button type="submit"><Icon name="search" /></button>
              </Form>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Nav;