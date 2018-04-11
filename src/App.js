import React, { Component } from 'react';

import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import * as routes from './constants/routes';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Recipes from './components/Recipes/Recipes';
import Profile from './components/Profile/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
            <Switch>
              <Route exact path={routes.HOME} component={() => <Home />} />
              <Route exact path={routes.RECIPES} component={() => <Recipes />} />
              <Route exact path={routes.PROFILE} component={() => <Profile />} />
              <Route path={routes.NOT_FOUND} component={() => <NotFound />} />
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
