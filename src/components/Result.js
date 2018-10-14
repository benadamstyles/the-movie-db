import React from 'react'
import styled from 'react-emotion'
import {css} from 'emotion'
import {Spring, animated, interpolate} from 'react-spring'
import PropTypes from 'prop-types'

const boxClass = css`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
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
  <Spring native to={{x: props.movie ? '0' : '100vw'}}>
    {({x}) =>
      props.movie ? (
        <animated.div
          style={{
            transform: interpolate([x], x => `translateX(${x})`),
          }}
          className={boxClass}>
          <Close type="button" onClick={props.dismiss}>
            close
          </Close>
          <Title>{props.movie.title}</Title>
          <Description>
            {props.movie.overview || '[No description found]'}
          </Description>
        </animated.div>
      ) : null
    }
  </Spring>
)

Result.propTypes = {
  movie: PropTypes.object,
  dismiss: PropTypes.func.isRequired,
}

export default Result
