import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  )
}

//functional component's defaultProps and propTypes
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
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
