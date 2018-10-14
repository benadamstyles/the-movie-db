import React, {Component} from 'react'
import styled from 'react-emotion'
import Async from 'react-async'
import PropTypes from 'prop-types'
import ResultsListItem, {Placeholder} from './ResultsListItem'
import {fetch} from '../util/fetch'
import OnScrollEnd from './OnScrollEnd'

const List = styled('ul')`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const dataHasResults = data => data && data.results && data.results.length > 0

export default class ResultsList extends Component {
  static propTypes = {
    searchText: PropTypes.string.isRequired,
    onSelectMovie: PropTypes.func.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    return this.props.searchText !== nextProps.searchText
  }

  fetchResults = page =>
    this.props.searchText
      ? fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=ecfdccbb9349ca6c7898c6ec1b482560&query=${
            this.props.searchText
          }&page=${page}`
        )
          .then(res => res.json())
          .then(res => ({
            page: res.page,
            results: res.results,
            total_pages: res.total_pages,
          }))
      : Promise.resolve([])

  nextPage = async prevData => {
    const nextPage = prevData.page + 1
    if (nextPage <= prevData.total_pages) {
      const nextData = await this.fetchResults(nextPage)
      return {
        page: nextPage,
        total_pages: prevData.total_pages,
        results: [
          ...prevData.results,

          // NOTE: this fixes a movieDB bug where duplicates are returned
          ...nextData.results.filter(
            ({id}) => !prevData.results.some(prevMovie => prevMovie.id === id)
          ),
        ],
      }
    } else {
      return prevData
    }
  }

  initialFetch = () => this.fetchResults(1)

  render() {
    return (
      <Async
        promiseFn={this.initialFetch}
        deferFn={this.nextPage}
        watch={this.props.searchText}>
        {({isLoading, run, data}) => (
          <>
            <OnScrollEnd callback={() => run(data)} />

            <Async.Loading>
              <Placeholder>loading ...</Placeholder>
            </Async.Loading>

            <List>
              {dataHasResults(data) &&
                data.results.map(movie => (
                  <ResultsListItem
                    key={String(movie.id)}
                    movie={movie}
                    onSelectMovie={this.props.onSelectMovie}
                  />
                ))}

              <Async.Resolved>
                {this.props.searchText &&
                  !dataHasResults(data) && (
                    <Placeholder>[No results found]</Placeholder>
                  )}
              </Async.Resolved>
            </List>
          </>
        )}
      </Async>
    )
  }
}
