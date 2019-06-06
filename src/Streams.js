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
      },
      value: ''
    }
    this.onRemoveClick = this.onRemoveClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  onRemoveClick(channel) {
    this.setState(state => {
      const channels = state.channels.filter((item) => item.name !== channel);
      return {
        channels
      };
    });
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState(state => {
      const channels = state.channels.concat({ name: state.value, player: null })
      return { channels, value: '' }
    })
  }
  render() {
    return (
      <React.Fragment>
        <div id="streams">
          {
            this.state.channels.map((channel) => (
              <Stream channel={ channel.name } settings={ this.state.settings } onRemoveClick={this.onRemoveClick} />
            ))
          }
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    )
  }
}

export default Streams;