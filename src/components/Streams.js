import React, { Component } from 'react';
import Stream from './Stream';
import AddStreamForm from './AddStreamForm'

class Streams extends Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: [],
      settings: {
        volume: "0.5",
        lowQuality: "360p30",
        highQuality: "chunked"
      }
    }
    this.onRemoveClick = this.onRemoveClick.bind(this)
    this.updateSearchString = this.updateSearchString.bind(this)
    this.onStreamAdded = this.onStreamAdded.bind(this)
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
  onStreamAdded(channel) {
    this.setState(state => {
      const channels = state.channels.concat(channel)
      return { channels }
    }, this.updateSearchString)
  }

  updateSearchString() {
    var channels = '';
    if (this.state.channels.length > 0) {
      channels = "?channels=" + this.state.channels.join(',')
    } else {
      channels = ""
    }
    console.log(channels)
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
        <AddStreamForm onStreamAdded={this.onStreamAdded} />
      </React.Fragment>
    )
  }
}

export default Streams;