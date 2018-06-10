import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = props => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(show => `${show.title} {show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map(show => <ShowCard key={show.imdbID} show={show} />)}
    </div>
  </div>
);

Search.propTypes = {
  shows: arrayOf(
    shape({
      title: string.isRequired,
      year: string.isRequired,
      description: string.isRequired,
      poster: string.isRequired,
      imdbID: string.isRequired,
      trailer: string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(Search);
