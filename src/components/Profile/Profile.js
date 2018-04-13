import React from 'react';
import './Profile.css';

import { auth } from '../../constants/firebase';

import { 
  Image, 
  Container,
  Header,
  Button,
  Card,
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
    favorites: [],
  }

  componentWillMount() {
    // fetch("https://mama-mia-2018.firebaseio.com/users.json")
    //   .then(res => res.json().then(data => console.log(data)))
    //   .catch(err => console.log(err));
  
    if(auth.currentUser) {
      this.setState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photo: auth.currentUser.photoURL,
        favorites: [
          {
            header: "Fritata",
            author: "James Oliver"
          },
          {
            header: "Chicken",
            author: "John Dickens"
          },
          {
            header: "Eggs",
            author: "Jenny Michaelson"
          },
        ],
      });
    } else {
      this.setState({
        name: "Guest",
        email: "example@example.com",
        photo: userPlaceholder,
        favorites: [
          {
            header: "You must be logged in",
            author: "to add favorites"
          }
        ],
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
          <Header style={{ marginBottom:"30px", textAlign: "center"}} as="h2">Favorites</Header>
          <Card.Group>
            {this.state.favorites.map((favorite, index) => {
              return (
              <Card centered key={index}>
                <Card.Content>
                  <Image floated="right" size="mini" src={userPlaceholder} alt={index} />
                  <Card.Header>{favorite.header}</Card.Header>
                  <Card.Meta>{favorite.author}</Card.Meta>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">Open</Button>
                      <Button basic color="red">Delete</Button>
                    </div>
                  </Card.Content>
                </Card.Content>
              </Card>
              );
            })}
          </Card.Group>
        </Container>
      </React.Fragment>
    );
  }
}

export default Profile;