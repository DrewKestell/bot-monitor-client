import React from 'react';
import { shape } from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/search" component={props => <Search shows={preload.shows} {...props} />} />
          <Route
            path="/details/:id"
            component={props => (
              <Details show={preload.shows.find(show => props.match.params.id === show.imdbID)} {...props} />
            )}
          />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

App.propTypes = {
  match: shape({
    params: shape({}).isRequired
  })
};

export default App;
