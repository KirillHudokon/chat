import React from "react"
import { Route, Redirect, withRouter } from "react-router-dom"
import ProtectedRouteAuthHoc from '../hoc/ProtectedRouteAuthHoc'
function ProtectedRoute({component: Component, name:name, match:match, user:user, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props)=>{
        if(name === 'auth' && user){
          console.log(2)
          return <Redirect to='/' />
        }
        if(name === 'auth' && !user){
          console.log(3)
          return <Component/>
        }
        if(name === 'app' && user && user.authStep < 3 && user.authStep === Number(props.match.params.id)){
          console.log(4)
          return <Component/>
        }
        if(name === 'app' && user && user.authStep < 3){
          console.log(5)
          return <Redirect to={`/user-info/${user.authStep}`} />
        }
        if(name === 'app' && user && user.authStep >= 3 && props.match.params.app === 'user-info'){
          console.log(6)
          return <Redirect to='/'/>
        }
        if(name === 'app' && user && user.authStep >= 3){
          console.log(7)
          return <Component/>
        }
        if(name === 'app' && !user){
          console.log(8)
          return <Redirect to='/signin' />
        }
        console.log(9)
        return <Component/>
      }}
    />           
  );
}

export default ProtectedRouteAuthHoc(withRouter(ProtectedRoute))
