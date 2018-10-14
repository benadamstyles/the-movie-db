import React, {PureComponent} from 'react'
import styled from 'react-emotion'

const Header = styled('header')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 2em;
`

const Input = styled('input')`
  background-color: transparent;
  border: none;
  font-size: 2em;
  border-bottom: 2px solid yellow;
  color: white;
`

const SearchInput = props => (
  <Header>
    <Input value={props.searchText} onChange={props.onChange} />
  </Header>
)

export default SearchInput
