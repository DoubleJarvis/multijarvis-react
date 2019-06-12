import React, { Component } from 'react'

class AddStreamForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.onStreamAdded(this.state.value)
    this.setState({ value: '' })
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Add new stream..."/>
          <input type="submit" value="Add" />
        </form>
      </React.Fragment>
    )
  }
}

export default AddStreamForm;