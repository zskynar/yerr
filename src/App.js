import React, {Component} from 'react';

import Yerr from './Yerr';
import allYerrs from './People';

import logo from './images/logo.svg';
import placeholder from './images/placeholder.svg';
import equalizer from './images/equalizer.svg';

import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon
} from "react-share";

const colorSchemes = ["black","dark", "blue"]
const shareUrl = "http://yerr.gg";

class Header extends Component {
  constructor(props) {
    super(props)
    // reference to the DOM node
    this.element = null;
    // reference to the animation
    this.timeline = null;
  }

  render() {
    return (
      <div className="header grid" ref={div => this.element = div}>
        <img className="logo" src={logo} />
      </div>
    )
  }
}

const UserHint = ({loading, hintText}) => (
  <div className="user-hint">
      Hit <span className="color">enter</span> to get a new yerr!
      <span className="small">(Audio on for best experience)</span>
  </div>
)

const Social = () => (
  <div className="social">
      <h4>Share</h4>
      <div className="social-icons">
        <FacebookShareButton><FacebookIcon size={32} round={true}/></FacebookShareButton>
        <TwitterShareButton><TwitterIcon size={32} round={true}/></TwitterShareButton>
      </div>
  </div>
)

const Click = ({playing}) => {
    return (
      <div className="click-hint grid-item">
          {playing ?  <img src={equalizer} /> : <span>Click to <br />Replay Yerr</span>}
      </div>
    )
}

const randomChoice = (arr, dontInclude) => {
  let newarr = arr.filter(a => a !== dontInclude)
  const randIndex = Math.floor(Math.random() * newarr.length)
  return newarr[randIndex]
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      yerr: [],
      text: '',
      file: '',
      credit: '',
      background: "black",
      playing: false,
    }

    this.handlePlaying = this.handlePlaying.bind(this)
  }

  handleBackground = event => {
    this.setState((prevState, props) => ({
        ...prevState,

        background: randomChoice(colorSchemes, prevState.background)
    }));
  }

  handlePlaying = event => {
    this.setState((prevState, props) => ({
        ...prevState,

        playing: !prevState.playing
    }));
  }

  handleKeyPress = event => {
    if (event.key === 'Enter' && !this.state.playing ) {
      this.setState((prevState, props) => ({
        ...prevState,

        yerr: [...prevState.yerr, randomChoice(allYerrs, prevState.yerr[prevState.yerr.length - 1])],
      }));
    }    
  }

  render() {
    const {yerr} = this.state
    const hasYerrs = this.state.yerr.length

    return (
      <div className={`page black`} onKeyPress={this.handleKeyPress} tabIndex="0">
        <Header />
        <div className="yerrs grid" ref={div => this.click = div}>
          <div className="yerr grid-item">
              <img className="yerr-image" src={placeholder} alt="placeholder"/>
          </div>
            {
              yerr.map((yerr, i) => <Yerr key={i} {...yerr} lastYerr={(hasYerrs - 1) === i ? true : false} changeBackground={this.handleBackground} handler={this.handlePlaying} />)
            }
            {hasYerrs ? <Click {...this.state} /> : <div class="grid-item placeholder">Press Enter</div>}
        </div>
        <UserHint />
        <Social />
      </div>
    );
  }
}

export default App;
