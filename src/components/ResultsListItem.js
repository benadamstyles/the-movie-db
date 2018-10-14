import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

const Button = styled('button')`
  background-color: transparent;
  background-image: url(${props =>
    `https://image.tmdb.org/t/p/original${props.imagePath}`});
  background-size: cover;
  background-position: center center;
  border: none;
  color: white;
  width: 100%;
  height: 6em;
  font-size: 4em;
  font-weight: bold;

  &:hover,
  &:focus {
    color: yellow;
  }
`

const ButtonText = styled('span')`
  text-shadow: 3px 3px 10px black;
`

export const Placeholder = Button.withComponent('p')

const ResultsListItem = props => (
  <li>
    <Button
      onClick={() => props.onSelectMovie(props.movie)}
      type="button"
      data-testid="result-button"
      imagePath={props.movie.backdrop_path || props.movie.poster_path}>
      <ButtonText data-testid="result-title">{props.movie.title}</ButtonText>
    </Button>
  </li>
)

ResultsListItem.propTypes = {
  movie: PropTypes.object.isRequired,
  onSelectMovie: PropTypes.func.isRequired,
}

export default ResultsListItem
