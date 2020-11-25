import React from "react"
import { Route, Redirect } from "react-router-dom"
function ProtectedRoute({component: Component, name:name, user:user, ...rest}) {
  return (
    <Route
      {...rest}
      render={()=>{
        if(name === 'auth' && user){
          return <Redirect to='/' />
        }
        if(name === 'auth' && !user){
          return <Component/>
        }
        if(name === 'app' && user){
          return <Component/>
        }
        if(name === 'app' && !user){
          return <Redirect to='/signin' />
        }
        return <Component/>
      }}
    />           
  );
}

export default ProtectedRoute
