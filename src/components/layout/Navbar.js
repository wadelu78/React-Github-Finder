import React, { Component } from "react"
import PropTypes from "prop-types"

class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon}></i> {this.props.title}
        </h1>
      </nav>
    )
  }
}

export default Navbar

//1. for a class based component, use {this.props.title}
//title comes from <Navbar title="Github Finder" /> in the App.js

//2. static defaultProps = {
//    title: "Github Finder",
//    icon: "fab fa-github"
//  }
// this is the defaultProps

//3. Type checking propTypes, to make the app more robust.
