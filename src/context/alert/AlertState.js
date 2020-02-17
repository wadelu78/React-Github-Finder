import React, { useReducer } from 'react'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'

import { SET_ALERT, REMOVE_ALERT } from '../types'

const AlertState = props => {
  const initialState = null

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  //Set Alert

  const setAlert = (msg, type) => {
    //setAlert({ msg, type })
    //setTimeout(() => setAlert(null), 5000)

    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    })

    setTimeout(() =>
      dispatch({
        type: REMOVE_ALERT
      })
    )
  }

  return (
    <AlertContext.Provider
      value={{
        //the entire state is set to null
        //so the key is alert, value is state
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState
