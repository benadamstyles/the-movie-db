import React, {Component} from 'react'
import './App.css'
import SearchInput from './components/SearchInput'

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
      </div>
    )
  }
}

export default App
