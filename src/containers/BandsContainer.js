import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    console.log('the bands are', this.props.bands)
    return(
      <div>
        <BandInput addBand={this.props.addBand} bands={this.props.bands}/>
        <ul>
          {
            this.props.bands.map((b, i) => <li key={i}>{b.name}</li>)
          }
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({type: 'ADD_BAND', band})
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
