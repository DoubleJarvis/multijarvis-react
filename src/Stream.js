import React, { Component } from 'react';

class Stream extends Component {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.state = {
      player: null
    }
  }
  componentDidMount() {
    var options = {
      width: "100%",
      height: 400,
      channel: this.props.channel,
    }
    var player = new window.Twitch.Player(this.props.channel, options)
    player.setVolume(this.props.settings.volume)
    player.setQuality(this.props.settings.lowQuality)

    this.setState({ player: player })
  }
  render() {
    const { channel } = this.props;
    return (
      <div onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave } className="stream" id={ channel }>
        <button id={ channel }>Remove</button>
      </div>
    )
  }
  onMouseEnter(event) {
    this.state.player.setQuality(this.props.settings.highQuality)
    this.state.player.setMuted(false)
  }
  onMouseLeave(event) {
    if (!this.state.player.getFullscreen()) {
      this.state.player.setQuality(this.props.settings.lowQuality)
      this.state.player.setMuted(true)
    }
  }
}

export default Stream;