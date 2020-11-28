import React from "react"
import { Route, Redirect, withRouter } from "react-router-dom"
import ProtectedRouteAuthHoc from '../hoc/ProtectedRouteAuthHoc'
function ProtectedRoute({component: Component, name:name, match:match, user:user, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props)=>{
        if(name === 'auth' && user){
          return <Redirect to='/' />
        }
        if(name === 'auth' && !user){
          return <Component/>
        }
        if(name === 'app' && user && user.authStep < 3 && user.authStep === Number(props.match.params.id)){
          return <Component/>
        }
        if(name === 'app' && user && user.authStep < 3){
          return <Redirect to={`/user-info/${user.authStep}`} />
        }
        if(name === 'app' && user && user.authStep >= 3 && props.match.params.app === 'user-info'){
          return <Redirect to='/'/>
        }
        if(name === 'app' && user && user.authStep >= 3){
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

export default ProtectedRouteAuthHoc(withRouter(ProtectedRoute))
