import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import User from './components/users/User'

import Alert from './components/layout/Alert'

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

import './App.css'
import About from './components/pages/About'

//import axios from 'axios'

//if we don't use hooks or redux to manage the state of the app
//the state should be centralized in the App.js
//then being passed down through props
const App = () => {
  //const [users, setUsers] = useState([])
  //const [user, setUser] = useState({})
  //const [repos, setRepos] = useState([])
  //const [loading, setLoading] = useState(false)
  //const [alert, setAlert] = useState(null)

  /*
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }
  */

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
  /*
  const searchUsers = async text => {
    //this.setState({ loading: true })
    setLoading(true)
    const res = await axios.get(
      //how to use env.local
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    
    this.setState({
      //because there are other stuff in the data we use "res.data.items"
      users: res.data.items,
      loading: false
    })
    
    setUsers(res.data.items)
    setLoading(false)
  }
  */

  // const getUser = async username => {
  //   //this.setState({ loading: true })
  //   setLoading(true)
  //   const res = await axios.get(
  //     //how to use env.local
  //     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   )

  /*
    this.setState({
      user: res.data,
      loading: false
    })
    */

  //   setUser(res.data)
  //   setLoading(false)
  // }

  // const getUserRepos = async username => {
  //   //this.setState({ loading: true })
  //   setLoading(true)
  //   const res = await axios.get(
  //     //how to use env.local
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   )
  /*
    this.setState({
      repos: res.data,
      loading: false
    })
    */
  //   setRepos(res.data)
  //   setLoading(false)
  // }

  // clearUsers = () => this.setState({ users: [], loading: false })

  /*
  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  }
  */

  // const showAlert = (msg, type) => {
  /*
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
    */
  //   setAlert({ msg, type })
  //   setTimeout(() => setAlert(null), 5000)
  // }

  //const { users, user, repos, loading, alert } = this.state
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Alert />
              {/* put multiple components in a single Route */}
              <Switch>
                <Route
                  exact
                  path="/"
                  //render={props => (
                  //  <Fragment>
                  //    <Search
                  // searchUsers={searchUsers}
                  //clearUsers={clearUsers}
                  //showClear={users.length > 0 ? true : false}
                  //setAlert={showAlert}
                  //    />
                  //   <Users />
                  //</Switch> </Fragment>
                  //</div>)}

                  component={Home}
                />
                <Route exact path="/about" component={About} />
                {/* the username (login) will be passed in here */}
                <Route
                  exact
                  path="/user/:login"
                  //render={props => (
                  // why we don't pass "props" directly ???
                  // an answer from stack overflow:
                  //You only use {... props} inside your render() when you pass the props down to another component.
                  //Use your unpacked props as normal this.props.x
                  //<User
                  //{...props}
                  //getUser={getUser}
                  //getUserRepos={getUserRepos}
                  //user={user}
                  //repos={repos}
                  //loading={loading}
                  // />
                  //)}
                  component={User}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App

//1. A ? B : C
//if we only need to execute B when A is true, instead of using
//A ? B : null
//we can use A && B

//2. pass bool value "loading" in the centralized state to <Users />
//then in the "Users" component, if loading is true, display a loading gif
//otherwise display a list of all users.
