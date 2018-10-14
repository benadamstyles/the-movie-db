import React, {Component} from 'react'
import './App.css'
import SearchInput from './components/SearchInput'
import ResultsList from './components/ResultsList'
import Result from './components/Result'

class App extends Component {
  state = {
    inputText: 'test',
    selectedMovie: null,
  }

  onTextInput = event => {
    this.setState({inputText: event.target.value})
  }

  onSelectMovie = selectedMovie => this.setState({selectedMovie})

  dismissResult = () => this.setState({selectedMovie: null})

  render() {
    return (
      <div className="App">
        <SearchInput
          searchText={this.state.inputText}
          onChange={this.onTextInput}
        />
        <ResultsList
          searchText={this.state.inputText}
          onSelectMovie={this.onSelectMovie}
        />
        <Result movie={this.state.selectedMovie} dismiss={this.dismissResult} />
      </div>
    )
  }
}

export default App
