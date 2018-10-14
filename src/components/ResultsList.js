import React, {Component} from 'react'
import styled from 'react-emotion'
import Async from 'react-async'
import PropTypes from 'prop-types'
import ResultsListItem, {Placeholder} from './ResultsListItem'
import {fetch} from '../util/fetch'

const List = styled('ul')`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export default class ResultsList extends Component {
  static propTypes = {
    searchText: PropTypes.string.isRequired,
    onSelectMovie: PropTypes.func.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    return this.props.searchText !== nextProps.searchText
  }

  fetchResults = () =>
    this.props.searchText
      ? fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=ecfdccbb9349ca6c7898c6ec1b482560&query=${
            this.props.searchText
          }`
        )
          .then(res => res.json())
          .then(res => res.results)
      : Promise.resolve([])

  render() {
    return (
      <Async promiseFn={this.fetchResults} watch={this.props.searchText}>
        {({data, isLoading}) =>
          isLoading ? (
            <Placeholder>loading ...</Placeholder>
          ) : (
            <List>
              {data.map(movie => (
                <ResultsListItem
                  key={String(movie.id)}
                  movie={movie}
                  onSelectMovie={this.props.onSelectMovie}
                />
              ))}
            </List>
          )
        }
      </Async>
    )
  }
}
