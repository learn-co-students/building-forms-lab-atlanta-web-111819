// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = e => {
    this.setState({name: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.addBand({name: this.state.name})
    console.log('bands are', this.props.bands)
  }

  render() {
    return(
      <div>
        <h1>Enter a band name</h1>
        <form onSubmit={this.onSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
