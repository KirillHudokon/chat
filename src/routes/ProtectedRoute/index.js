import React from "react"
import { Route } from "react-router-dom"
function ProtectedRoute({component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={()=>{
        return <Component/>
      }}
    />           
  );
}

export default ProtectedRoute
