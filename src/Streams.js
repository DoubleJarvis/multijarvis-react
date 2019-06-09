import React, { Component } from 'react';
import Stream from './Stream';

class Streams extends Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: [],
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
      const channels = window.location.search.match(/\?channels=(?<channels>.+)/).groups.channels.split(',').map(channel => channel)
      this.setState({ channels })
    }
  }
  onRemoveClick(channel) {
    this.setState(state => {
      const channels = state.channels.filter((item) => item !== channel);
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
    if (this.state.value) {
      this.setState(state => {
        const channels = state.channels.concat(state.value)
        return { channels, value: '' }
      }, this.updateSearchString)
    } else {
      alert("Cannot add empty stream")
    }
  }
  updateSearchString() {
    const channels = "?channels=" + this.state.channels
      .map((channel) => channel)
      .join(',')
    window.history.pushState({}, "MultiJarvis", channels)
  }
  render() {
    return (
      <React.Fragment>
        <div id="streams">
          {
            this.state.channels.map((channel) => (
              <Stream key={channel} channel={ channel } settings={ this.state.settings } onRemoveClick={this.onRemoveClick} />
            ))
          }
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Add new stream..."/>
          <input type="submit" value="Add" />
        </form>
      </React.Fragment>
    )
  }
}

export default Streams;