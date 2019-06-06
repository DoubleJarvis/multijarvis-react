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
    this.updateSearchString = this.updateSearchString.bind(this)
  }
  componentWillMount() {
    if (window.location.search) {
      const channels = window.location.search.match(/\?channels=(?<channels>.+)/).groups.channels.split(',').map((channel) => {
        return { name: channel, player: null }
      })
      this.setState({ channels })
    }
  }
  onRemoveClick(channel) {
    this.setState(state => {
      const channels = state.channels.filter((item) => item.name !== channel);
      return {
        channels
      };
    }, this.updateSearchString);
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState(state => {
      const channels = state.channels.concat({ name: state.value, player: null })
      return { channels, value: '' }
    }, this.updateSearchString)
  }
  updateSearchString() {
    const channels = "?channels=" + this.state.channels
      .map((channel) => channel.name)
      .join(',')
    window.history.pushState({}, "MultiJarvis", channels)
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