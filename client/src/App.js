import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'App'
    }
  }

  componentDidMount() {
    axios.get('/users')
      .then(res => {
        this.setState({ test: res.data })
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        { this.state.test }
      </div>
    )
  }
}

export default App
