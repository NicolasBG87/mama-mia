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
    const id = window.location.pathname.substring(16).replace(/#/g, "%");

    recipe.get(`search?r=${id}`)
      .then(res => {
        const recipe = res.data[0];
        this.setState({ recipe });
        yt.get(`search?q=How to make ${recipe.label}`)
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
            {this.state.recipe.label}
          </Header>
          <Header.Subheader 
            as="h3">
            Author: {this.state.recipe.source}
          </Header.Subheader>
          <p>{Math.round(this.state.recipe.calories)} Calories</p>
          <Image 
            src={this.state.recipe.image}
            alt={this.state.recipe.label} 
            fluid
          />
          <Header 
            as="h3">
            Ingredients
          </Header>
          <ul>
            {this.state.recipe.ingredients.map((ing, index) => {
              return (
                <li key={index}>{ing.text}</li>
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