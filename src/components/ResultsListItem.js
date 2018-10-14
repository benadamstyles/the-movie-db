import React from 'react'
import styled from 'react-emotion'

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
      imagePath={props.movie.backdrop_path || props.movie.poster_path}>
      <ButtonText>{props.movie.title}</ButtonText>
    </Button>
  </li>
)

export default ResultsListItem
