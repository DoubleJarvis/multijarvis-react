import React, { Component } from 'react';

class Stream extends Component {
  componentDidMount() {
    var options = {
      width: "100%",
      height: 400,
      channel: this.props.channel,
    };
    var player = new window.Twitch.Player(this.props.channel, options);
    player.setVolume(0.5);
  }
  render() {
    const { channel, onclick } = this.props;
    return (
      <div style={streamStyles} id={channel}>
        <button onclick={ onclick }>Remove</button>
      </div>
    )
  }
}
const streamStyles = {
  border: "3px dashed #333"
}

export default Stream;