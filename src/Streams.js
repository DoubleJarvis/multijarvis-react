import React, { Component } from 'react';
import Stream from './Stream';

class Streams extends Component {
  state = {
    channels: [
      "dandrumstone", "dasmehdi", "bobross"
    ]
  }
  render() {
    return (
      <div id="streams">
        {
          this.state.channels.map((channel) => (
            <Stream channel={channel} onclick={this.updateChannelsState}/>
          ))
        }
      </div>
    )
  }
  updateChannelsState(event) {
    // var index = this.state.channels.indexOf(event.target.id);
    // if (index !== -1) {
    //   var newState = this.state.channels.splice(index, 1)
    // }
    // this.setState({
    //   channels: newState
    // })
    console.log("button")
    console.log(event)
  }
}

export default Streams;