import React, { Component } from 'react';
import RemoveButton from './RemoveButton';

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
      channel: this.props.channel,
    }
    var player = new window.Twitch.Player(this.props.channel, options)
    player.setVolume(this.props.settings.volume)
    player.setQuality(this.props.settings.lowQuality)
    player.setMuted(true)
    player.disableCaptions()
    
    this.setState({ player: player })
  }
  render() {
    const { channel } = this.props;
    return (
      <div onMouseEnter={ this.onMouseEnter } onMouseLeave={ this.onMouseLeave } className="stream" id={ channel }>
        <RemoveButton id={channel} action="Remove" onRemoveClick={this.props.onRemoveClick} />
      </div>
    )
  }
  onMouseEnter(event) {
    this.state.player.setMuted(false)
    this.state.player.setQuality(this.props.settings.highQuality)
  }
  onMouseLeave(event) {
    if (!this.state.player.getFullscreen()) {
      this.state.player.setMuted(true)
      this.state.player.setQuality(this.props.settings.lowQuality)
    }
  }
}

export default Stream;