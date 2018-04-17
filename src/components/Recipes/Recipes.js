import React from 'react';
import './Recipes.css';

import {
  Container,
  Card,
  Image,
  Button,
  Loader,
} from 'semantic-ui-react';

const containerStyle = {
  width: "500px",
  margin: "50px auto",
  background: "#fff",
  padding: "20px",
  borderRadius: "5px",
  boxShadow: "0 5px 8px rgba(0, 0, 0, 0.7)"
}

class Recipes extends React.Component {
  state = {
    results: [],
  }
  
  componentDidMount() {
    const currPath = window.location.pathname;
    let searchQuery = currPath.substring(9).replace(/%/g, "").replace(/20/g, "");

    fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=a0695591&app_key=0f739d2fde28a49c615e17fec8dc1129`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => res.json()
        .then(data => {
          const results = data.hits;
          this.setState({ results });
        }))
      .catch(err => console.log(err));
  }

  openRecipe = (id) => {
    window.location.pathname = `/mama-mia/recipe${id}`;
  }

  render() {
    let template;
    if(this.state.results.length) {
      template = 
      this.state.results.map((result, index) => {
        return (
        <Card centered key={index}>
          <Card.Content>
            <Image floated="right" size="medium" src={result.recipe.image} alt={index} />
            <Card.Header>{result.recipe.label}</Card.Header>
            <Card.Meta>{Math.round(result.recipe.calories)} Calories</Card.Meta>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button 
                  color="green"
                  onClick={() => this.openRecipe(result.recipe.uri)}>
                  Open
                </Button>
                {console.log(result.recipe.uri)}
              </div>
            </Card.Content>
          </Card.Content>
        </Card>
        );
      });
    } else {
      template = 
        <Loader size="massive" active inline="centered" >Loading</Loader>;
    }

    return (
      <React.Fragment>
        <Container style={containerStyle}>
        <Card.Group>
          {template}
        </Card.Group>
        </Container>
      </React.Fragment>
    );
  }
};

export default Recipes;