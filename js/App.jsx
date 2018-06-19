import React from 'react';
import { shape } from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './Landing';
import Details from './Details';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
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
