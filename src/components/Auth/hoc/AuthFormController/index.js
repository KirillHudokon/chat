import React, { useState, useCallback } from "react";

function AuthFormController (Component, initialState){
  return function AuthFormControllerComponent(props){
    const [userData, setUserData] = useState(initialState)
    const setNewUserData = (userDataName,userDataValue) => {
      setUserData({
        ...userData,
        [userDataName]:userDataValue
      })
    }
    const changeUserData = (e) => setNewUserData(e.target.name, e.target.value)
    return <Component
      {...props}
      userData={userData}
      changeUserData={changeUserData}
    /> 
  }
}
export default AuthFormController;


