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

    fetch(`https://food2fork.com/api/search?key=efc7ae89e9dde4cdfa065e0cf5685a3c&q=${searchQuery}&count=10&sort=r`)
      .then(res => res.json()
        .then(data => {
          const results = data.recipes;
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
            <Image floated="right" size="medium" src={result.image_url} alt={index} />
            <Card.Header>{result.title}</Card.Header>
            <Card.Meta>{result.publisher}</Card.Meta>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button 
                  color="green"
                  onClick={() => this.openRecipe(result.recipe_id)}>
                  Open
                </Button>
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