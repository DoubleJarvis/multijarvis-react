import React, { Component } from 'react';
import Stream from './Stream';

class Streams extends Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: [
        { name: "ortopilot", player: null },
        { name: "catharsisdrums", player: null},
      ],
      settings: {
        volume: "0.5",
        lowQuality: "360p30",
        highQuality: "chunked"
      }
    }
    this.onRemoveClick = this.onRemoveClick.bind(this)
  }
  render() {
    return (
      <div id="streams">
        {
          this.state.channels.map((channel) => (
            <Stream channel={ channel.name } settings={ this.state.settings } onRemoveClick={this.onRemoveClick} />
          ))
        }
      </div>
    )
  }
  onRemoveClick(channel) {
    console.log(channel)
    this.setState(state => {
      const channels = state.channels.filter((item) => item.name !== channel);
      return {
        channels
      };
    });
  }
}

export default Streams;