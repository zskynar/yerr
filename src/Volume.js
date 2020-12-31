import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import {Howler} from 'howler';
import icon from './images/volume-icon.svg';

class Volume extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 100
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value
    })

    this.updateVolume()
  }

  updateVolume = () => {
    const globalVolume = this.state.value / 100

    Howler.volume(globalVolume)
  }

  render () {
    const { value } = this.state
    return (
      <div className='volume slider orientation-reversed'>
        <div className='slider-group'>
          <div className='slider-vertical'>
            <Slider
              min={0}
              max={100}
              value={value}
              orientation='vertical'
              onChange={this.handleChange}
            />
            <img src={icon} alt="volume-icon" />
          </div>
        </div>
      </div>
    )
  }
}

export default Volume