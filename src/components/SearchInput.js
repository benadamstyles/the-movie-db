import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

const Header = styled('header')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 2em;
`

const Container = styled('div')`
  display: flex;
  max-width: 100%;
`

const Input = styled('input')`
  background-color: transparent;
  border: none;
  font-size: 2em;
  border-bottom: 2px solid yellow;
  color: white;
  width: 14em;
  max-width: 100%;
`

const Clear = styled('button')`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 2em;
  transform: translateX(-100%);

  &:hover,
  &:focus {
    color: yellow;
  }
`

const SearchInput = props => (
  <Header>
    <Container>
      <Input
        placeholder="Search the movie database"
        value={props.searchText}
        onChange={props.onChange}
      />
      <Clear type="button" onClick={props.clearText}>
        ×
      </Clear>
    </Container>
  </Header>
)

SearchInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  clearText: PropTypes.func.isRequired,
}

export default SearchInput
