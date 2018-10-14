import React, {Component} from 'react'
import './App.css'
import SearchInput from './components/SearchInput'
import ResultsList from './components/ResultsList'

class App extends Component {
  state = {
    inputText: '',
  }

  onTextInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <SearchInput
          searchText={this.state.inputText}
          onChange={this.onTextInput}
        />
        <ResultsList searchText={this.state.inputText} />
      </div>
    )
  }
}

export default App
