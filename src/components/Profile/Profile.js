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

const Profile = () => {
  let user = {
    name: "",
    email: "",
    photo: "",
    favorites: [],
  }

  fetch("https://mama-mia-2018.firebaseio.com/users.json")
    .then(res => res.json().then(data => console.log(data)))
    .catch(err => console.log(err));
  
  if(auth.currentUser) {
    user.name = auth.currentUser.displayName;
    user.email = auth.currentUser.email;
    user.photo = auth.currentUser.photoUrl;
    user.favorites = [
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
    ];
  } else {
    user.name = "Guest";
    user.email = "example@example.com";
    user.photo = userPlaceholder;
    user.favorites = [
      {
        header: "You must be logged in",
        author: "to add favorites"
      }
    ];
  }

  return (
    <React.Fragment>
      <Container style={containerStyle}>
        <Image className="userImage" centered src={user.photo} alt="userImage" />
        <Header style={{ marginBottom:"30px", padding:"20px"}} as="h2" className="advert">
          {user.name}<br/>
          <Header.Subheader>
            {user.email}
          </Header.Subheader>
        </Header>
        <Header style={{ marginBottom:"30px", textAlign: "center"}} as="h2">Favorites</Header>
        <Card.Group>
          {user.favorites.map((favorite, index) => {
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
};

const containerStyle = {
  width: "500px",
  margin: "50px auto",
  background: "#fff",
  padding: "20px",
  borderRadius: "5px",
  boxShadow: "0 5px 8px rgba(0, 0, 0, 0.7)"
}

export default Profile;