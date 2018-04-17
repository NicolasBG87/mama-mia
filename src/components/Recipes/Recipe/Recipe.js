import React, { Component } from 'react';

import {
  Container,
  Image,
  Header,
  Loader,
  Embed,
} from 'semantic-ui-react';

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

    fetch(`https://api.edamam.com/search?r=${id}&app_id=a0695591&app_key=0f739d2fde28a49c615e17fec8dc1129`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => res.json()
        .then(content => {
          console.log(content);
          this.setState({
            recipe: content[0]
          })
          fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&key=AIzaSyDVqmCaJWQS2CFQUxrCjd6SyQVzezDRzDk&q=How to make ${content[0].label}`)
            .then(res => res.json()
              .then(content => {
                this.setState({
                  youtube: content.items[0]
                })
              }))
              .catch(err => console.log(err));
        }))
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