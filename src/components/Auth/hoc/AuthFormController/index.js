import React, { useState, useCallback } from "react";
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
function AuthFormController (Component, initialState){
  return function AuthFormControllerComponent(props){
    const [userData, setUserData] = useState(initialState)
    const setNewUserData = (userDataName,userDataValue) => {
      setUserData({
        ...userData,
        [userDataName]:userDataValue
      })
    }
    const handleAction = (e) => {
      e.preventDefault()
      props.action(userData)
    }
    const showToast = () => {
      return (
        <Snackbar
          open={Boolean(props.authStatus.error)}
        >
          <Alert severity="error">
            {props.authStatus.error}
          </Alert>
        </Snackbar>
      )  
    }
    const changeUserData = (e) => setNewUserData(e.target.name, e.target.value)
    return (
      <>
        <Component
          {...props}
          userData={userData}
          changeUserData={changeUserData}
          handleAction={handleAction}
          showToast={showToast}
        />
        {props.authStatus.error && showToast()}
      </> 
    )
  }
}
export default AuthFormController;


