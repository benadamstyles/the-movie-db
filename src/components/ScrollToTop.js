import React from 'react'
import styled from 'react-emotion'

const Button = styled('button')`
  position: fixed;
  top: auto;
  bottom: 1em;
  left: auto;
  right: 1em;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 3em;

  &:hover,
  &:focus {
    color: yellow;
  }
`

const ScrollToTop = () => (
  <Button
    onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }}
    type="button">
    ⇧
  </Button>
)

export default ScrollToTop
