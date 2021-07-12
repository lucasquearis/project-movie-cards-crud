import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, subtitle, rating, imagePath } = movie;
    return (
      <div data-testid="movie-card">

        <img src={ imagePath } alt={ title } />
        <p>
          {title}
        </p>
        <p>
          {subtitle}
        </p>
        <p>
          {storyline}
        </p>
        <p>
          {rating}
        </p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.string,
}.isRequired;

export default MovieCard;
