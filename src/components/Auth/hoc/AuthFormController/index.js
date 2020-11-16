import { useState } from "react";

const AuthFormController = (Component, initialState) => (props) => {
  const [userData, setUserData] = useState(initialState)
  const setNewUserData = (userDataName,userDataValue) => {
    setUserData({
      ...userData,
      [userDataName]:userDataValue
    })
  }
  return <Component
    {...props}
    {...userData}
    setNewUserData={setNewUserData}
  /> 
}
export default AuthFormController;


