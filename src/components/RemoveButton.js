import React, { Component } from 'react';

class RemoveButton extends Component {
  render() {
    const { id } = this.props
    return (
      <button className="btn btn-remove" id={id} onClick={() => this.onRemoveClick(id)}>
        Remove
      </button>
    )
  }
  onRemoveClick(channel) {
    this.props.onRemoveClick(channel)
  }
}

export default RemoveButton;