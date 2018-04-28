// ADD BUTTON TO ADD TO FAVORITES
// WRITE FAVORITES TO THE DATABASE
// FETCH FROM THE DATABASE INTO PROFILE
// REMOVE FAVORITES FROM THE PROFILE AND DATABASE

import React, { Component } from 'react';

import {
  Container,
  Image,
  Header,
  Loader,
  Embed,
} from 'semantic-ui-react';

import { recipe, yt } from '../../../constants/axios';

const containerStyle = {
  width: "500px",
  margin: "50px auto",
  background: "#fff",
  padding: "20px",
  borderRadius: "5px",
  boxShadow: "0 5px 8px rgba(0, 0, 0, 0.7)"
}

class Recipe extends Component {
  state = {
    recipe: null,
    youtube: null,
  }

  componentDidMount() {
    const id = window.location.pathname.substring(16);

    recipe.get(`&rId=${id}`)
      .then(res => {
        const recipe = res.data.recipe;
        this.setState({ recipe });
        yt.get(`search?q=How to make ${recipe.title}`)
        .then(res => {
          this.setState({
            youtube: res.data.items[0]
          })
        })
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  render() {
    let template;
    if(this.state.recipe !== null && this.state.youtube !== null) {
      template = 
        <div>
          <Header 
            as="h1">
            {this.state.recipe.title}
          </Header>
          <Header.Subheader 
            as="h3">
            Author: {this.state.recipe.publisher}
          </Header.Subheader>
          <Image 
            src={this.state.recipe.image_url}
            alt={this.state.recipe.title} 
            fluid
          />
          <Header 
            as="h3">
            Ingredients
          </Header>
          <ul>
            {this.state.recipe.ingredients.map((ing, index) => {
              return (
                <li key={index}>{ing}</li>
              );
            })}
          </ul>
          <Embed 
            id={this.state.youtube.id.videoId}
            placeholder={this.state.youtube.snippet.thumbnails.high.url}
            source="youtube"
          />
        </div>;
    } else {
      template = 
        <Loader size="massive" active inline="centered" >Loading</Loader>;
    }
    return (
      <React.Fragment>
        <Container style={containerStyle}>
          {template}
        </Container>
      </React.Fragment>
    );
  }
}

export default Recipe;