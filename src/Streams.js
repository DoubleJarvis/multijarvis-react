import React, { Component } from 'react';
import Stream from './Stream';

class Streams extends Component {
  state = {
    channels: [
      { name: "dandrumstone", player: null },
      { name: "bobross", player: null},
      { name: "hungry", player: null }
    ],
    settings: {
      volume: "1",
      lowQuality: "360p30",
      highQuality: "chunked"
    }
  }
  render() {
    return (
      <div id="streams">
        {
          this.state.channels.map((channel) => (
            <Stream channel={ channel.name } settings={ this.state.settings } />
          ))
        }
      </div>
    )
  }
}

export default Streams;