import React, {Component} from 'react';
import {Howl, Howler} from 'howler';
import { gsap } from "gsap";

class Yerr extends Component {
    constructor(props) {
        super(props)

        this.state = {
            playing: false
        }

        // This binding is necessary to make `this` work in the callback
        this.playAudio = this.playAudio.bind(this);
        this.togglePlaying = this.togglePlaying.bind(this);

        // reference to the DOM node
        this.element = null;
        // reference to the animation
        this.timeline = null;
    }

    togglePlaying() {
        this.setState((prevState, props) => ({
            playing: !prevState.playing
        }));
    }

    playAudio() {
        const $this = this
        const {file, handler, changeBackground} = this.props;

        var sound = new Howl({
            src: [file],
            onplay: function() {
                $this.togglePlaying()
                changeBackground()
                handler()
            },
            onend: function() {
                $this.togglePlaying()
                handler()
            },
        });
    
        if (!this.state.playing) {
            sound.play()
        }
    }

    componentDidMount() {
        this.playAudio()

        this.timeline = gsap.timeline()
        this.timeline.fromTo(this.element, 0.75, {scale: 5, autoAlpha: 0}, {scale: 1, autoAlpha: 1, ease: "power2.out"}, 0)
        this.timeline.to(this.element, 20, {rotation:"360", ease: "none", repeat:-1}, 0.5)
    }

    componentDidUpdate() {
        if (!this.props.lastYerr) {
            gsap.to(this.element, 0.75, {scale: 0.75, autoAlpha: 0, ease: "power2.out", onComplete: this.timeline.pause() })
        }
    }

    render() {
      const {name, file, credit, background} = this.props;
  
      return (
        <div className="yerr grid-item" onClick={this.playAudio} ref={div => this.element = div}>
            <div className="yerr-info">
              <div className="yerr-title">
                <h2>{name}</h2>
              </div>
              <div className="yerr-credit">
                <span className="credits">Credits</span>
                <h3>{credit}</h3>
              </div>
            </div>
            <img className="yerr-image" src={background} alt="yerr"/>
        </div>
      )
    }
  }

  export default Yerr;