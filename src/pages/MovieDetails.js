import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    getMovie(params.id)
      .then((response) => {
        this.setState({
          movie: response,
          loading: false,
        });
      });
  }

  handleClick() {
    const { match: { params: { id } } } = this.props;
    deleteMovie(id);
    return '/';
  }

  render() {
    const { loading } = this.state;
    if (loading) { return <Loading />; }
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{`Title: ${title}`}</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to="/" onClick={ this.handleClick }>DELETAR</Link>
        </div>
        <div>
          <Link to="/">VOLTAR</Link>
        </div>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
