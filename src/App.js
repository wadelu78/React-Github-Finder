import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import './App.css'
import About from './components/pages/About'

import axios from 'axios'

//if we don't use hooks or redux to manage the state of the app
//the state should be centralized in the App.js
//then being passed down through props
class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }
  /*
  componentDidMount() {
    //axios.get return a promise
    axios.get('https://api.github.com/users').then(res => console.log(res.data))
  }
  */
  /*
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
  */
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(
      //how to use env.local
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    this.setState({
      //because there are other stuff in the data we use "res.data.items"
      users: res.data.items,
      loading: false
    })
  }

  getUser = async username => {
    this.setState({ loading: true })
    const res = await axios.get(
      //how to use env.local
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    this.setState({
      user: res.data,
      loading: false
    })
  }

  getUserRepos = async username => {
    this.setState({ loading: true })
    const res = await axios.get(
      //how to use env.local
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    this.setState({
      repos: res.data,
      loading: false
    })
  }

  clearUsers = () => this.setState({ users: [], loading: false })

  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg,
        type
      }
    })

    setTimeout(
      () =>
        this.setState({
          alert: null
        }),
      5000
    )
  }

  render() {
    const { users, user, repos, loading, alert } = this.state
    return (
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            {/* put multiple components in a single Route */}
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              {/* the username (login) will be passed in here */}
              <Route
                exact
                path="/user/:login"
                render={props => (
                  // why we don't pass "props" directly ???
                  // an answer from stack overflow:
                  //You only use {... props} inside your render() when you pass the props down to another component.
                  //Use your unpacked props as normal this.props.x
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </Fragment>
      </Router>
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
