import React from 'react';
import './Profile.css';

import { auth } from '../../constants/firebase';

import { 
  Image, 
  Container,
  Header,
  Button,
} from 'semantic-ui-react';
import userPlaceholder from '../../assets/userPlaceholder.png';

const containerStyle = {
  width: "500px",
  margin: "50px auto",
  background: "#fff",
  padding: "20px",
  borderRadius: "5px",
  boxShadow: "0 5px 8px rgba(0, 0, 0, 0.7)"
}

class Profile extends React.Component {
  state = {
    name: "",
    email: "",
    photo: "",
  }

  componentWillMount() {
    if(auth.currentUser) {
      this.setState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photo: auth.currentUser.photoURL,
      });
    } else {
      this.setState({
        name: "Guest",
        email: "example@example.com",
        photo: userPlaceholder,
      });
    }
  }

  signOut = () => {
    auth.signOut();
  }

  render() {
    return (    
      <React.Fragment>
        <Container style={containerStyle}>
          <Image className="userImage" centered src={this.state.photo} alt="userImage" />
          <Header style={{ marginBottom:"30px", padding:"20px"}} as="h2" className="advert">
            {this.state.name}<br/>
            <Header.Subheader>
              {this.state.email}
            </Header.Subheader>
            <Button 
              onClick={this.signOut} 
              basic 
              style={{ margin: "20px auto"}}
              color="red"
            >Sign Out</Button>
          </Header>
        </Container>
      </React.Fragment>
    );
  }
}

export default Profile;