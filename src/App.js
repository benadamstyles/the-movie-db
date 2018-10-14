import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

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
        <header className="App-header">
          <input value={this.state.inputText} onChange={this.onTextInput} />
          <p>{this.state.inputText}</p>
        </header>
      </div>
    )
  }
}

export default App
