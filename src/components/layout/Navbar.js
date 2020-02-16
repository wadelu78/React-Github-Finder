import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
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

//4. Using <Link> to keep the state of the app
