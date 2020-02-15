import React, { Component, Fragment } from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import './App.css'

import axios from 'axios'

//if we don't use hooks or redux to manage the state of the app
//the state should be centralized in the App.js
//then being passed down through props
class App extends Component {
  state = {
    users: [],
    loading: false
  }
  /*
  componentDidMount() {
    //axios.get return a promise
    axios.get('https://api.github.com/users').then(res => console.log(res.data))
  }
  */

  //async await version:
  async componentDidMount() {
    //no this.state.loading = true in react
    //instead, use setState, then pass an object with the part of the state we want to change
    this.setState({ loading: true })
    const res = await axios.get(
      //how to use env.local
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    this.setState({
      users: res.data,
      loading: false
    })
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </Fragment>
    )
  }
}

export default App

//1. A ? B : C
//if we only need to execute B when A is true, instead of using
//A ? B : null
//we can use A && B

//2. pass bool value "loading" in the centralized state to <Users />
//then in the "Users" component, if loading is true, display a loading gif
//otherwise display a list of all users.
