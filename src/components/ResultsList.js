import React, {Component} from 'react'
import styled from 'react-emotion'
import Async from 'react-async'

export default class ResultsList extends Component {
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
            <p>loading ...</p>
          ) : (
            <ul>
              {data.map(x => (
                <li key={String(x.id)}>{x.title}</li>
              ))}
            </ul>
          )
        }
      </Async>
    )
  }
}
