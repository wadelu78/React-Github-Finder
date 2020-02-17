import React, { useState, useContext } from 'react'
//import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  // state = {
  //   text: ''
  // }
  const [text, setText] = useState('')

  const onChange = e => {
    /*
    this.setState({
      //text: e.target.value
      //In ES6, objects can be created with computed keys:
      //the syntax is:
      //var obj ={
      // [mykey]: value,
      //}
      [e.target.name]: e.target.value
    })*/
    setText(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light')
    } else {
      //pass this value "up" to the app.js through props
      //props pass "down" a function and here we invoke this function by using
      //"this.state.text" as the arguments
      //searchUsers(text)

      githubContext.searchUsers(text)

      //clear the input control
      // this.setState({
      //   text: ''
      // })
      setText('')
    }
  }

  // onSubmit(e) {
  //   e.preventDefault()
  //   console.log(this.state.text)
  // }

  return (
    <div>
      {/* <form onSubmit={this.onSubmit.bind(this)} className="form"> */}
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          // value={this.state.text}
          value={text}
          // onChange={this.onChange}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  )
}

//Search.propTypes = {
//searchUsers: PropTypes.func.isRequired,
//clearUsers: PropTypes.func.isRequired,
//showClear: PropTypes.bool.isRequired,
//setAlert: PropTypes.func.isRequired
//}

export default Search

//1. for a text input, when value is set to this.state.text,
//it cannot be changed directly, so it should has a onChange event handler
//and invoke this.setState in this event handler.

//2. form inputs are component level state.
