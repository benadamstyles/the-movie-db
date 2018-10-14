import React, {Component} from 'react'
import './App.css'
import SearchInput from './components/SearchInput'
import ResultsList from './components/ResultsList'
import Result from './components/Result'
import ScrollToTop from './components/ScrollToTop'

class App extends Component {
  state = {
    inputText: '',
    selectedMovie: null,
  }

  onTextInput = event => {
    this.setState({inputText: event.target.value})
  }

  clearText = () => this.setState({inputText: ''})

  onSelectMovie = selectedMovie => this.setState({selectedMovie})

  dismissResult = () => this.setState({selectedMovie: null})

  render() {
    return (
      <div className="App">
        <SearchInput
          searchText={this.state.inputText}
          onChange={this.onTextInput}
          clearText={this.clearText}
        />
        <ResultsList
          searchText={this.state.inputText}
          onSelectMovie={this.onSelectMovie}
        />
        <ScrollToTop />
        <Result movie={this.state.selectedMovie} dismiss={this.dismissResult} />
      </div>
    )
  }
}

export default App
