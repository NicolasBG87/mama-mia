import React from 'react';
import './Home.css';

import { 
  Image, 
  Item,
  Message,
  Header,
  Container,
  Divider
} from 'semantic-ui-react';
import veggies from '../../assets/veggies.png';
import search from '../../assets/search.png';
import cooking from '../../assets/cooking.png';
import worry from '../../assets/facepalm.png';
import favicon from '../../assets/favicon.png';

const Home = () => {
  return (
    <React.Fragment>
      <Container style={containerStyle}>
        <Image className="worry" centered src={worry} alt="worry" />
        <Message
          icon='warning sign'
          color="red"
          header='Average person spends 30 minutes to 2 hours deciding what to cook EVERY DAY!'
          content="Don't be THAT person. Don't waste your time browsing through the recipes for hours only to find out that you're missing a key ingredient."
        />
        <Header style={{ marginBottom:"50px", padding:"20px"}} as="h2" className="advert">
          TRY MAMA MIA<br/>
          <Image src={favicon} alt="favicon" /><br />
          <Header.Subheader>
            It's free!
          </Header.Subheader>
        </Header>
        <Item.Group>
          <Item>
            <Item.Image size="small" src={veggies} alt="veggies" />
            <Item.Content>
              <Item.Header as="a">STEP ONE</Item.Header>
              <Item.Description>Open your fridge and choose ingredients for your dish.</Item.Description>
              <Item.Extra>3 minutes</Item.Extra>
            </Item.Content>
          </Item>
          <Divider horizontal>
            <span
              role="img"
              aria-label="fands"
              aria-labelledby="fands"
              >&#127860;</span>
          </Divider>
          <Item>
            <Item.Image size="small" src={search} alt="search" />
            <Item.Content>
              <Item.Header as="a">STEP TWO</Item.Header>
              <Item.Description>Put your ingredients into our search box to find a perfect dish.</Item.Description>
              <Item.Extra>2 minutes</Item.Extra>
            </Item.Content>
          </Item>
          <Divider horizontal>
            <span
              role="img"
              aria-label="fands"
              aria-labelledby="fands"
            >&#127860;</span>
          </Divider>
          <Item>
            <Item.Image size="small" src={cooking} alt="cooking" />
            <Item.Content>
              <Item.Header as="a">STEP THREE</Item.Header>
              <Item.Description>Select one of our carefully selected dishes, open up tutorial video and get crackin'!</Item.Description>
              <Item.Extra>DONE!</Item.Extra>
            </Item.Content>
          </Item>
          <Divider horizontal>
            <span
              role="img"
              aria-label="fands"
              aria-labelledby="fands"
            >&#127860;</span>
            </Divider>
        </Item.Group>
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

export default Home;