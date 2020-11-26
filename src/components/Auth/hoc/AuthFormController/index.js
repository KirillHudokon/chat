import React, { useState, useEffect, useRef } from "react";
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
function AuthFormController (Component, initialState){
  return function AuthFormControllerComponent(props){
    const resetErrorTimer = useRef(null);
    const { resetStoreWithoutCred, authStatus, action } = props
    const [userData, setUserData] = useState(initialState)
    useEffect(()=>{
      if(authStatus.success){
        setUserData(initialState)
      }
    },[authStatus.success])
    useEffect(()=>{
      return ()=>{
        clearTimer()
        resetStoreWithoutCred()
      }
    },[resetStoreWithoutCred])
    const setNewUserData = (userDataName,userDataValue) => {
      setUserData({
        ...userData,
        [userDataName]:userDataValue
      })
    }
    const handleAction = (e) => {
      e.preventDefault()
      action(userData)
    }
    const clearTimer = () => {
      if (resetErrorTimer.current !== null) {          
        clearTimeout(resetErrorTimer.current);         
      }
    }
    const addTimer = () => {
      const timer = 5000;
      clearTimer()
      resetErrorTimer.current = setTimeout(()=>{
        resetStoreWithoutCred()
      },timer)
    }
    const showToast = (status) => {
      addTimer()
      return (
        <Snackbar
          open={Boolean(authStatus[status])}
        >
          <Alert severity={status}>
            {status === 'error' ? authStatus[status] : 'Link was sent to your email' }
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
        {authStatus.error && showToast('error')}
        {authStatus.success && showToast('success')}
      </> 
    )
  }
}
export default AuthFormController;


