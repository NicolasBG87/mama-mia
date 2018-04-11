import React, { Component } from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { authGoogle, authFacebook } from '../../constants/auth';

import { 
  Sidebar, 
  Segment, 
  Button, 
  Header,
  Modal,
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
    modalOpen: false,
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

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

  authFacebook = () => {
    authFacebook();
  }

  authGoogle = () => {
    authGoogle();
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
              icon="user circle"
              onClick={this.handleOpen} />
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
        <Modal 
          open={this.state.modalOpen}
          onClose={this.handleClose}
          className="loginModal"
        >
          <Modal.Header>SIGN IN</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={logo} />
            <Modal.Description>
              <p>Sign in and get access to the meal planner(currently in the beta stage) and the ability to save cooking recipes to favorites.</p>
              <Header
                onClick={this.authGoogle}
              >
                <Icon color="red" name="google plus"/> Google Plus
              </Header>
              <Header 
                onClick={this.authFacebook}
              >
                <Icon color="blue" name="facebook" /> Facebook
              </Header>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default Nav;