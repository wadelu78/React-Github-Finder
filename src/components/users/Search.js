import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    text: ''
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  }

  onChange = e => {
    this.setState({
      //text: e.target.value
      //In ES6, objects can be created with computed keys:
      //the syntax is:
      //var obj ={
      // [mykey]: value,
      //}
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light')
    } else {
      //pass this value "up" to the app.js through props
      //props pass "down" a function and here we invoke this function by using
      //"this.state.text" as the arguments
      this.props.searchUsers(this.state.text)

      //clear the input control
      this.setState({
        text: ''
      })
    }
  }

  // onSubmit(e) {
  //   e.preventDefault()
  //   console.log(this.state.text)
  // }

  render() {
    const { showClear, clearUsers } = this.props
    return (
      <div>
        {/* <form onSubmit={this.onSubmit.bind(this)} className="form"> */}
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    )
  }
}

export default Search

//1. for a text input, when value is set to this.state.text,
//it cannot be changed directly, so it should has a onChange event handler
//and invoke this.setState in this event handler.

//2. form inputs are component level state.
