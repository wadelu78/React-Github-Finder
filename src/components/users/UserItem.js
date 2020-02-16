import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//it is called nested object destructuring
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  /*
  //the state is kept in the UserItem component
  state = {
    id: 'id',
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo'
  }
  */

  //destructuring this.state
  //or destructuring this.props.user
  //const { login, avatar_url, html_url } = this.state
  //const { login, avatar_url, html_url } = props.user
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem
