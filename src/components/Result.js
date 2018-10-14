import React from 'react'
import styled from 'react-emotion'
import {Spring} from 'react-spring'

const Box = styled('div')`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: auto;
  right: ${({right}) => right};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1em;
`

const Close = styled('button')`
  background-color: transparent;
  color: white;
  border: none;
  align-self: flex-end;
  font-size: 3em;

  &:hover,
  &:focus {
    color: yellow;
  }
`

const Title = styled('h1')`
  font-size: 4em;
  color: white;
`

const Description = styled('p')`
  font-size: 2em;
  color: white;
`

const Result = props => (
  <Spring to={{right: props.movie ? '0' : '-100vw'}}>
    {({right}) =>
      props.movie ? (
        <Box right={right}>
          <Close type="button" onClick={props.dismiss}>
            close
          </Close>
          <Title>{props.movie.title}</Title>
          <Description>{props.movie.overview}</Description>
        </Box>
      ) : null
    }
  </Spring>
)

export default Result
