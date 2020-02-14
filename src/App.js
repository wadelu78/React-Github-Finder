import React, { Component, Fragment } from "react"
import Navbar from "./components/layout/Navbar"
import "./App.css"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
      </Fragment>
    )
  }
}

export default App

//1. A ? B : C
//if we only need to execute B when A is true, instead of using
//A ? B : null
//we can use A && B
